this["JST"] = this["JST"] || {};

this["JST"]["templates/about.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"descrip\">\n      <span class=\"headline-1\">I build</span>\n      <span class=\"subline-1\">fast,</span> \n      <span class=\"subline-2\">responsive,</span> \n      <span class=\"subline-3\">accessible,</span> \n      <span class=\"subline-4\">maintainable,</span> \n      <span class=\"subline-5\">well-designed,</span> \n      <span class=\"subline-6\">mobile-friendly,</span> \n      <span class=\"subline-7\">searchable,</span> \n      <span class=\"headline-2\">sexy websites.</span>\n    </div>\n  </div>\n</div>";
  });

this["JST"]["templates/contact.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"container\">\n  <h3 class=\"sm-header\">Hire Me</h3>\n  <div class=\"contact-links\">\n    <div class=\"lg-header\"><span>I'm currently <b>not</b> available for</span><span> contract or freelance projects.</span></div><p>Sorry! :(</p>\n    <ul class=\"link-icons\">\n      \n      <li><a data-label=\"github\" href=\"https://github.com/tnbKristi?tab=repositories\" target=\"_blank\"><i class=\"fa fa-github-alt\"></i></a></li>\n      <li><a data-label=\"linkedin\" href=\"http://www.linkedin.com/in/kristicentinaro/\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li>\n      <li><a data-label=\"googleplus\" href=\"http://plus.google.com/u/0/105851997129401536120/posts/\" target=\"_blank\"><i class=\"fa fa-google-plus\"></i></a></li>\n      <li><a data-label=\"deviantart\" href=\"http://inkjetcanvas.deviantart.com/\" target=\"_blank\"><i class=\"fa fa-picture-o\"></i></a></li>\n    </ul>\n    <div class=\"link-labels\">\n      \n      <div class=\"l-label github\">Explore my GitHub Repo</div>\n      <div class=\"l-label linkedin\">Connect on LinkedIn</div>\n      <div class=\"l-label googleplus\">Add me on Google+</div>\n      <div class=\"l-label deviantart\">Check out my DeviantArt</div>\n    </div>\n  </div>\n\n </div>";
  return buffer;
  });

this["JST"]["templates/intro.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"intro-image\">\n  <img src=\"/images/profile-img-bw.jpg\" />\n</div>\n<div class=\"intro-content\">\n  <h1>Hi! I'm Kristi.</h1>\n  <h2>I'm A Front-End Developer <br />&amp; UX Designer.</h2>\n</div>";
  });

this["JST"]["templates/skill-item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"skill-name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n<span class=\"skill-rating\">\n  <div class=\"progress\">  \n    <div class=\"progress-bar\" role=\"progressbar\" data-percent=\"";
  if (helper = helpers.percent) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percent); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  </div>\n</div></div>\n</span>";
  return buffer;
  });

this["JST"]["templates/skills.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"skills-intro\">\n  <h3 class=\"sm-header\">Skills &amp; Strengths</h3>\n  <p>I'm happiest when I'm creating engaging and intuitive experiences for people on the web.</p>\n  <p>I work best when I can focus on <b>exceptional design</b>, <b>user experience</b>, and <b>semantic code</b>.</p>\n  <p>I love building responsive, mobile-friendly web apps with Backbone &amp; Marionette, though I've built a few Django and Wordpress sites, too!</p>\n  <p></p>\n  <div class=\"filters\">\n    <span class=\"label label-info\" data-label=\"markup\">\n      <i class=\"fa fa-tag\"></i> Semantic Markup\n    </span>\n    <span class=\"label label-success\" data-label=\"markup\">\n      <i class=\"fa fa-tag\"></i>  JavaScript\n    </span>\n    <span class=\"label label-warning\" data-label=\"markup\">\n      <i class=\"fa fa-tag\"></i>  Backend / DevTools\n    </span>\n    <span class=\"label label-danger\" data-label=\"markup\">\n      <i class=\"fa fa-tag\"></i> Misc\n    </span>\n    <span class=\"label label-primary\" data-label=\"markup\">\n      <i class=\"fa fa-tag\"></i> Front End\n    </span>\n  </div>\n</div>\n<div class=\"skills-list-block\">\n  <div class=\"skills-list\"></div>\n</div>";
  });

this["JST"]["templates/work.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n  <h3 class=\"sm-header\">Work</h3>\n  <div class=\"row\">\n    <div class=\"current-project\">\n      <h4>Most Recent Project:</h4>\n      <div class=\"project-details\">\n          <span class=\"project-title\">Tavern Keeper</span>\n          <div class=\"project-image\">\n            <a href=\"https://tavern-keeper.com/home\" target=\"_blank\"><img src=\"/images/tk-site-1.jpg\" /></a>\n          </div>\n          <div class=\"project-info\">\n            <p><a href=\"https://tavern-keeper.com/home\" target=\"_blank\">tavern-keeper.com</a></p>\n            <p>A Tabletop Rolplaying Community which focuses on tools and services that make it easier for gamers to create and manage characters and campaigns.</p>\n            <p>This site is a 2-person project between myself and my husband (a Ruby Developer and API Mastermind).</p>\n          </div>\n        </div>\n    </div>\n    <div class=\"past-projects\">\n      <h4>Previous Employers:</h4>\n      <img src=\"/images/employers.jpg\" alt=\"Weebly, GSI Commerce, YouGov, Electronic Ink\" />\n      <p>Plus oodles of freelance and independent projects, including:</p>\n      <ul>\n        <li>A Network-Based CMS for Small Businesses, built from the ground up</li>\n        <li>Chrome Extension Development</li>\n        <li>Wordpress Theme Design &amp; Dev.</li>\n        <li>Single Page Apps</li>\n        <li>Overhaul old websites into scalable, modular html/css</li>\n      </ul>\n    </div>\n  </div>\n</div>";
  });