var DATA = '%data%';
var CONTACT = '%contact%';

var bio = {
  name: "Jeff Ekhardt",
  role: "Web Developer",
  contacts: {
    mobile: "650-444-1244",
    email: "jeffekhardt@yahoo.com",
    github: "jekhardt",
    linkedin: "jeffekhardt",
    twitter: "@jekhardt",
    location: "Milpitas, CA"
  },
  welcomeMessage: "Welcome!",
  skills: [
    "full-stack development",
    "behavioral and test driven development",
    "test automation and infrastructure",
    "test infrastructure",
    "languages: java, javascript, php, bash, ruby, python, perl",
    "infrastructure: aws, nginx, haproxy, puppet, capistrano",
    "test frameworks: junit, testng, cucumber, rspec, mocha, abao",
    "test tools: selenium, protractor, capybara, jmeter",
    "databases: mysql, oracle, postgres, mssql",
    "vmware: vsphere, view, vcloud",
    "wordpress",
    "team building"
  ],
  biopic: "images/me.jpg",
  display: function() {
    var header = $('#header');
    header
      .prepend(HTMLheaderRole.replace(DATA, this.role))
      .prepend(HTMLheaderName.replace(DATA, this.name))
      .append(HTMLbioPic.replace(DATA, this.biopic))
      .append(HTMLwelcomeMsg.replace(DATA, this.welcomeMessage))
      .append(HTMLskillsStart);

    var skills = $('#skills');
    bio.skills.forEach(function (skill) {
      skills.append(HTMLskills.replace(DATA, skill));
    });

    var mobile = HTMLmobile.replace(DATA, this.contacts.mobile);
    var email = HTMLemail.replace(DATA, this.contacts.email);
    var github = HTMLgithub.replace(DATA, this.contacts.github);
    var linkedin = HTMLcontactGeneric.replace(CONTACT, 'linkedin').replace(DATA, this.contacts.linkedin);
    var twitter = HTMLtwitter.replace(DATA, this.contacts.twitter);
    var location = HTMLlocation.replace(DATA, this.contacts.location);

    $('#topContacts')
      .append(mobile)
      .append(email)
      .append(github)
      .append(linkedin)
      .append(twitter)
      .append(location);

    $('#footerContacts')
      .append(mobile)
      .append(email)
      .append(github)
      .append(linkedin)
      .append(twitter)
      .append(location);
  }
};

var education = {
  schools: [
    {
      name: "Foothill College",
      location: "Los Altos, CA",
      degree: "",
      majors: [
        "Computer Science",
        "Music Technology"
      ],
      dates: "2010",
      url: "http://www.foothill.edu"
    },
    {
      name: "College of San Mateo",
      location: "San Mateo, CA",
      degree: "",
      majors: [
        "Computer Science"
      ],
      dates: "2003",
      url: "http://www.collegeofsanmateo.edu"
    }
  ],
  onlineCourses: [
    {
      title: "Front-end Web Developer Nanodegree",
      school: "Udacity",
      date: "2015",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      title: "Ruby Path",
      school: "Code School",
      date: "2014",
      url: "https://www.codeschool.com/paths/ruby"
    }
  ],
  display: function() {
    var education = $('#education');
    this.schools.forEach(function (school) {
      education.append(HTMLschoolStart);
      var educationTitle = HTMLschoolName.replace(DATA, school.name);

      // Handle schools without degrees
      if (school.degree.length > 0) educationTitle += HTMLschoolDegree.replace(DATA, school.degree);

      var entry = $('.education-entry:last')
        .append(educationTitle)
        .append(HTMLschoolDates.replace(DATA, school.dates))
        .append(HTMLschoolLocation.replace(DATA, school.location));
      entry.find('a').attr('href', school.url);

      school.majors.forEach(function (major) {
        entry.append(HTMLschoolMajor.replace(DATA, major));
      });
    });

    education.append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course) {
      education.append(HTMLschoolStart);
      var courseTitle = HTMLonlineTitle.replace(DATA, course.title) + HTMLonlineSchool.replace(DATA, course.school);
      var entry = $('.education-entry:last')
        .append(courseTitle)
        .append(HTMLonlineDates.replace(DATA, course.date))
        .append(HTMLonlineURL.replace(DATA, course.url));
      entry.find('a').attr('href', course.url);
    });
  }
};

var work = {
  jobs: [
    {
      employer: "Bina Technologies (Roche Molecular Sequencing)",
      title: "Sr. QE Manager",
      location: "Redwood Shores, CA",
      dates: "August 17, 2015 - Present",
      description: "#code2cure quality and release engineering"
    },
    {
      employer: "Rocket Fuel Inc.",
      title: "Engineering Manager",
      location: "Redwood City, CA",
      dates: "March 1, 2015 - August 16, 2015",
      description: "Test automation and web infrastructure teams"
    },
    {
      employer: "Rocket Fuel Inc.",
      title: "Automation Architect",
      location: "Redwood City, CA",
      dates: "December 15, 2013 - February 28, 2015",
      description: "Web app and integration test automation"
    },
    {
      employer: "Apigee Corporation",
      title: "Lead Quality Engineer",
      location: "Palo Alto, CA",
      dates: "June 2012 - November 2013",
      description: "UI and platform release test and automation"
    },
    {
      employer: "SinceEighty6",
      title: "Web Developer",
      location: "San Mateo, CA",
      dates: "2010 - 2012",
      description: "Part-time web development projects"
    },
    {
      employer: "Yahoo! Inc.",
      title: "Sr. QE Engineer",
      location: "Santa Clara, CA",
      dates: "September 2010 - May 2012",
      description: "Real-time ad targeting testing and backend system test frameworks"
    },
    {
      employer: "Bay Marketing and Advertising Inc.",
      title: "Web Developer",
      location: "San Mateo, CA",
      dates: "2007 - 2011",
      description: "Part-time web development projects"
    },
    {
      employer: "VMware Inc.",
      title: "Sr. QA Engineer",
      location: "Palo Alto, CA",
      dates: "April 2008 - September 2010",
      description: "Enterprise desktop and cloud product testing and automation tools and reporting"
    },
    {
      employer: "Branders Inc.",
      title: "Software Engineer",
      location: "San Mateo, CA",
      dates: "September 2005 - December 2014",
      description: "Part-time full-stack finance and order management applications"
    },
    {
      employer: "Yahoo! Inc.",
      title: "QA Engineer",
      location: "Sunnyvale, CA",
      dates: "July 2005 - April 2008",
      description: "Strategic data solutions ad targeting and SEM testing and automation frameworks"
    }
  ],
  display: function() {
    var experience = $('#workExperience');
    this.jobs.forEach(function (job) {
      experience.append(HTMLworkStart);
      var title = HTMLworkEmployer.replace(DATA, job.employer) + HTMLworkTitle.replace(DATA, job.title);
      $('.work-entry:last')
        .append(title)
        .append(HTMLworkLocation.replace(DATA, job.location))
        .append(HTMLworkDates.replace(DATA, job.dates))
        .append(HTMLworkDescription.replace(DATA, job.description));
    });
  }
};

var projects = {
  projects: [
    {
      title: "Udacity Portfolio",
      dates: "2014",
      description: "Responsive project portfolio page",
      images: [
        "images/udacity-portfolio-350_medium_1x.jpg"
      ]
    },
    {
      title: "OpenWebDriver",
      dates: "June 2012 - November 2013",
      description: "WebDriver abstractions for Java",
      images: [
        "images/open-webdriver-350_medium_1x.jpg"
      ]
    },
    {
      title: "TestLink Java API",
      dates: "June 2013 - August 2013",
      description: "Improved test case content sync in Java library for TestLink XMLRPC API",
      images: [
        "images/testlink-api-350_medium_1x.jpg"
      ]
    },
    {
      title: "TestLink Jenkins Plugin",
      dates: "July 2012 - February 2013",
      description: "Improved test result reporting in Jenkins Plugin for TestLink execution results reporting",
      images: [
        "images/testlink-plugin-350_medium_1x.jpg"
      ]
    }
  ],
  display: function() {
    var projects = $('#projects');
    this.projects.forEach(function(project) {
      projects.append(HTMLprojectStart);
      var entry = $('.project-entry:last')
        .append(HTMLprojectTitle.replace(DATA, project.title))
        .append(HTMLprojectDates.replace(DATA, project.dates))
        .append(HTMLprojectDescription.replace(DATA, project.description));
      project.images.forEach(function(image) {
        entry.append(HTMLprojectImage.replace(DATA, image));
      });
    });
  }
};

// Run display functions after DOM has loaded
$(function() {
  bio.display();
  work.display();
  projects.display();
  education.display();
  $('#mapDiv').append(googleMap);
});
