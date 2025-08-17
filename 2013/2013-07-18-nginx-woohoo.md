---
published: true
title: "Nginx woohoo!"
id: "5719"
slug: "nginx-woohoo"
author: rv
date: 2013-07-18 23:11
categories: Tech
---
Yesterday I finally cancelled my old Bluehost account. I hadn't been using it for about a month since switching to AWS, and now it's final. Bluehost has been really great. They've always responded to my requests quickly and helpfully, and they issued me a refund immediately. If you're not looking for a self-managed server they're a great option.

Yesterday this blog was running Wordpress on an Apache server. Today this blog is served from a very speedy nginx server with some neat rules for serving cached pages from WP Super Cache directly, bypassing php entirely and speeding up stuff a whole lot. Some guides mentioned installing Varnish for even more caching, and I've also been toying with using Amazon's content delivery network for static files, but I'm rapidly reaching the overkill point. After all, this blog doesn't really get that many visitors, so this is just technological masturbation.

Well, partially. Amazon does charge you for CPU time and bandwidth, so anything saved there will reduce the monthly bill. Let's see what the introduction of Nginx will do.

For reference, here's the nginx config file I'm using. It serves Wordpress from the /blog directory, redirect the naked domain to www, redirects the root to /blog, tries the WP supercache for a blog page first if present (only if it's not a POST request, if the user is logged in and it's not an admin page), then falls back to calling index.php with the url path as the query parameter so Wordpress can do its url mapping.

<code>
<pre style="padding-left: 30px; white-space: pre-wrap;">

server {

	root /var/www;
	index index.php index.html index.htm;

	# Make site accessible from http://localhost/
	server_name colorfulwolf.com;

	rewrite ^/$ /blog/ permanent;

	if ($host ~* ^colorfulwolf\.com$) {
		rewrite ^(.*)$ http://www.colorfulwolf.com$1 permanent;
	}

	set $cache_uri $request_uri;

	if ($request_method = POST) {
		set $cache_uri 'null cache';
	}

	if ($query_string != "") {
		set $cache_uri 'null-cache';
	}

	if ($request_uri ~* "(/wp-admin/|/xmlrpc.php|/wp-(app|cron|login|register|mail).php|wp-.*.php|/feed/|index.php|wp-comments-popup.php|wp-links-opml.php|wp-locations.php|sitemap(_index)?.xml|[a-z0-9_-]+-sitemap([0-9]+)?.xml)") {
		set $cache_uri 'null-cache';
	}

	if ($http_cookie ~* "comment_author|wordpress_[a-f0-9]+|wp-postpass|wordpress_logged_in") {
		set $cache_uri 'null cache';
	}

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to index.html
		try_files /blog/wp-content/cache/supercache/$http_host/$cache_uri/index.html $uri $uri/ /index.html /blog/index.php?q=$1;
		# Uncomment to enable naxsi on this location
		# include /etc/nginx/naxsi.rules
	}

	location ~ /\.ht {
		deny all;
	}

	location /doc/ {
		alias /usr/share/doc/;
		autoindex on;
		allow 127.0.0.1;
		deny all;
	}

	# Only for nginx-naxsi : process denied requests
	#location /RequestDenied {
		# For example, return an error code
		#return 418;
	#}

	error_page 404 /404.html;

	# redirect server error pages to the static page /50x.html
	#
	error_page 500 502 503 504 /50x.html;
	location = /50x.html {
		root /usr/share/nginx/www;
	}

	# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
	
	location ~ \.php$ {
	#location ~ brokenonpurpose {
		fastcgi_split_path_info ^(.+\.php)(/.+)$;
		# NOTE: You should have "cgi.fix_pathinfo = 0;" in php.ini
	
		# With php5-cgi alone:
		#fastcgi_pass 127.0.0.1:9000;
		# With php5-fpm:
		fastcgi_pass unix:/var/run/php5-fpm.sock;
		fastcgi_index index.php;
		fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
		include fastcgi_params;
	}

	# deny access to .htaccess files, if Apache's document root
	# concurs with nginx's one
	#
	#location ~ /\.ht {
	#	deny all;
	#}
}
</code>