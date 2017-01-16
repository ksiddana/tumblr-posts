# Tumblr Application

This repository contains an ExtJS application that uses the Tumblr's API to search blogs from Tumblr. Documentation for the ExtJS Framework can be found below:

- Version 6.0.2 Framework
- [ExtJS API Documentation](https://docs.sencha.com/extjs/6.0.2/classic/Ext.grid.Panel.html)

## Installation Instructions

Clone the Git Repository and install the npm dependencies by running `npm install`.

	git clone https://github.com/ksiddana/tumblr-posts.git
	cd tumblr-posts/
	cd server/
	npm install
	node server.js

Once you have the `npm modules` installed and your `node server` running open up your browser and go to [http://localhost:3000](http://localhost:3000).

## Features of the Application

- Form Field for searching Tumblr Blogs
	- billboard, nasa, arsenalfeed, peacecorps, cbs
	- Text field Validation check for the Blog Name
- View the last 10 posts of the Tumblr Blog in a Responsive Grid.
- Ability to select all the rows in the Grid.
- Ability to select one row at a time.
- [Tumblr API Documentation](https://www.tumblr.com/docs/en/api/v2)