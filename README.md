**Note**: There has been some confusion between this and the late CMSGov/healthcare.gov repository.

There were two contractors working on healthcare.gov, each with separate responsibilities. The CMSGov
repository had one section. This repository contains the other.

***CMSGov Repository***
- Frontend Blog Files
- No Marketplace application code
- Relatively bug-free
- Completed by [Development Seed](http://developmentseed.org/)

***This repository***
- Marketplace application code
- Numerous bugs and poor coding practices
- Completed by [CGI Federal](http://www.cgi.com/en/us-federal/services-solutions)
- This is the code that has been on the news.

As of this writing, this is **the only repository on GitHub with this data.**

What This Is
------------

This repository is an unofficial bug tracker and pull request target for fixes
to [healthcare.gov/marketplace](https://healthcare.gov/marketplace/global/en_US/registration),
the much-maligned backend piece created by CGI Federal. Please post issues you've been having
with the marketplace here. As there is no other publicly available bugtracker, this is the place
to post issues and bugs.

This repository attempts to be a working fork of the marketplace. You should be able to run this
on a local web server and access healthcare.gov in the same way.


What This Isn't
---------------

This is not an *official* repository. For all we know, nobody is listening.

This is not a clone of the CMSGov/healthcare.gov repository.

I have created this in hopes that there are some concerned programmers at CGI Federal who want to see
the project succeed. Sourcing fixes from the users of healthcare.gov is one way to achieve that goal.

See [the pull request](http://webcache.googleusercontent.com/search?q=cache:Tqg9LB2D2aYJ:https://github.com/CMSgov/healthcare.gov/pull/31+&cd=3&hl=en&ct=clnk) that started this idea. 
(Google Cache)

See the [open issues](https://github.com/STRML/Healthcare.gov-Marketplace/issues) and 
[closed issues](https://github.com/STRML/Healthcare.gov-Marketplace/issues?page=1&state=closed).


How To Run
----------

Prerequisites: `node`.

```bash
git clone git@github.com:STRML/Healthcare.gov-Marketplace.git # or download ZIP
cd Healthcare.gov-Marketplace
npm install
npm start # Starts local proxy server & launches browser
```

Tests
-----

There are no tests at this time. Please submit some in your favorite test framework. I lean towards QUnit but 
I won't refuse adding any worthwhile test code.


TODO
----

[Open Issues](https://github.com/STRML/Healthcare.gov-Marketplace/issues)
* ~~Redirect API calls to their actual destination so this fork works~~
* Rewrite incoming redirects so we don't get moved back to healthcare.gov on login.
* Add any missing JS/CSS from other sections of the site
* Add unit tests and TravisCI integration
* Pass JSHint (good luck)


Contributing
------------

If healthcare.gov frustrates you, please contribute! My hope is that this repository becomes large enough
to attract some real attention, not just from CGI Federal but from Health & Human Services. They have been thoroughly
embarassed by this boondoggle and with luck will be looking for a way to reform the system and save face.

See the TODO list above.

While the existing source does not pass jshint, please make sure that any contributions do (we have to start somewhere).
Unit tests would be greatly appreciated. Please place them inside the `test/` folder, prefixed by unit test framework
(qunit, jasmine). Please just make sure they pass, and feel free to use your favorite test framework. I will take care
of wiring them into Grunt and TravisCI.

See the [baseline](https://github.com/STRML/Healthcare.gov-Marketplace/tree/baseline) branch for unmodified
upstream files. If you notice a change in the Healthcare.gov Marketplace, please commit it to that branch. Changes
will be merged from baseline to master when possible.

Development
-----------

If you want to run without minification for development, use `grunt develop`.
