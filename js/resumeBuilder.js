/** JSON structure used to store & generate resume data
    includes bio, education, work experience and project sections
    double quotes are required per JSON specification
*/
var bio = {
    "name"          : "Steve Jansson",
    "role"          : "Systems Engineer",
    "contacts" : {
        "mobile"    : "201-914-1796",
        "email"     : "shjansson@att.net",
        "github"    : "midfielder6",
        "location"  : "New York City"
    },
    "welcomeMessage": "Welcome to My Page",
    "biopic"        : "images/headshot2.jpg",
    "skills" : [
      {
        "level"     : "Advanced : ",
        "skdetails" : ["Policy QoS, LDAP, RADIUS CoA"]
      },
      {
        "level"     : "Experienced : ",
        "skdetails" : ["VM Management, C, Perl, Linux"],
      },
      {
        "level"     : "Basic : ",
        "skdetails" : ["Python, JavaScript, Unix Shell scripting"]
      }
    ],
    "summary"       : "Determined to bring my programming skills more up to date, " +
                      "I decided to enroll in Udacity's Programming Nanodegree program. " +
                      "Its never too late to learn and grow your skills."
};

var education = {
    "schools" : [
    {
      "name"      : "Steven Institute of Technology",
      "degree"    : "Master of Science ",
      "dates"     : "1980 - 1984",
      "location"  : "Hoboken, NJ",
      "majors"    : ["Management Science"],
      "url"       : "https://www.stevens.edu"
    },
    {
      "name"      : "Lycoming College",
      "degree"    : "Bachelor of Arts",
      "dates"     : "1974 - 1978",
      "location"  : "Williamsport, PA",
      "majors"    : ["Economics"],
      "url"       : "https://www.lycoming.edu"
    }
  ],
    "onlineCourses": [
    {
      "title"     : "Intro to Programming (Nanodegree)",
      "school"    : "Udacity",
      "dates"     : "Feb 2017 - Present",
      "url"       : "Website: https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    },
    {
      "title"     : "Programming in Perl",
      "school"    : "AT&T School of Business & Technology",
      "dates"     : "September 2004",
      "url"       : "Website: https://www.facebook.com/pages/ATT-School-of-Business-Technology/161229150592510"
    },
  ]
};

var work = {
  "jobs"  : [
    {
      "employer"  : "AT&T",
      "title"     : "Engineer",
      "dates"     : "1999 - Present",
      "location"  : "Middletown, NJ",
      "description": "Systems Engineer - Test Engineer"
    },
    {
      "employer"  : "US Web/CKS",
      "title"     : "Engineer",
      "dates"     : "1997 - 1999",
      "location"  : "New York, NY",
      "description": "Systems Engineer (Consultant)"
    },
    {
      "employer"  : "Chubb & Son",
      "title"     : "Network Systems Manager",
      "dates"     : "1985 - 1997",
      "location"  : "Roseland, NJ",
      "description": "Manage Telco and Data Systems"
    },
    {
      "employer"  : "Gibbs & Hill, Inc.",
      "title"     : "Asst Project Engineer",
      "dates"     : "1979 - 1985",
      "location"  : "New York, NY",
      "description": "Power Plant Design - Project Management"
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title"     : "Dual Stack Network Implementation & CoA",
      "dates"     : "2016 - 2017",
      "description": "Datastore and Policy Impacts",
      "images"    : ["images/dualstack.jpg", "images/CoA.gif"]
    },
    {
      "title"     : "Virtual Broadband Network Gateway",
      "dates"     : "2014 - 2018",
      "description": "Policy impacts to 7450 replacement with VM",
      "images"    : ["images/vBNG.jpg"]
    },
    {
      "title"     : "Project Lightspeed",
      "dates"     : "2008 - Present",
      "description": "Subscriber Provisioning and RG Activations",
      "images"    : ["images/TriplePlay.jpg"]
    },
    {
      "title"     : "Yanbu Industrial City / Newark Refuse Energy Recovery Plant",
      "dates"     : "1978 - 1983",
      "description": "Design Build Industrial City in Kingdom of Saudi Arabia" +
                     " ~ Refuse to Energy Plant in Newark, NJ",
      "images"    : ["images/yanbu.jpg", "images/refuse_plant.jpg"]
    }
  ]
};

/** Build and Format Bio Data - using helper.js and JSON data above
  JavaScript method`string.replace(old, new)` is used to swap out all
  placeholder text (e.g. `%data%`) for resume data stored in JSON objects
*/
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);
    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(bioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);

    var formatMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formatEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formatGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    // var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formatLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formatMobile,formatEmail,formatGithub,formatLocation);
    // $("#topContacts").append(formattedTwitter);
  	$("#footerContacts").append(formatMobile,formatEmail,formatGithub,formatLocation);
  	// $("#footerContacts").append(formattedTwitter);
  	$("#header").append(HTMLskillsStart);
    // build skill details defined in bio
    for (var i=0;i < bio.skills.length; i++) {
        var formattedSkillLevel = HTMLskillsLevel.replace("%data%",bio.skills[i].level);
        var formattedSkillSubjects = HTMLskills.replace("%data%", bio.skills[i].skdetails);
        var formattedSkills = formattedSkillLevel + formattedSkillSubjects;
        $('#skills').append(formattedSkills);
    }
    $("#header").append(HTMLbackgroundMsg.replace("%data%", bio.summary));
};
bio.display();

// build work experiece section using JSON data along with helper.js
// for loop used to to take advantage of data array
work.display = function() {
  for (var workPlace=0; workPlace < work.jobs.length; workPlace++) {
      $("#workExperience").append(HTMLworkStart);
      var employerFormatted = HTMLworkEmployer.replace("%data%", work.jobs[workPlace].employer);
      var titleFormatted = HTMLworkTitle.replace("%data%", work.jobs[workPlace].title);
      var employerFormattedTitle = employerFormatted + titleFormatted;
      $(".work-entry:last").append(employerFormattedTitle);
      var wkDatesFormatted = HTMLworkDates.replace("%data%", work.jobs[workPlace].dates);
      $(".work-entry:last").append(wkDatesFormatted);
      var wkLocationFormatted = HTMLworkLocation.replace("%data%", work.jobs[workPlace].location);
      $(".work-entry:last").append(wkLocationFormatted);
      var wkDescriptFormatted = HTMLworkDescription.replace("%data%", work.jobs[workPlace].description);
      $(".work-entry:last").append(wkDescriptFormatted);
  }
};
work.display();

// build project summary using display properties function in the projects object
// for loop used to to take advantage of data array
projects.display = function() {
  for (var projSumm=0; projSumm < projects.projects.length; projSumm++) {
      $("#projects").append(HTMLprojectStart);
      var projectFormattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[projSumm].title);
      $(".project-entry:last").append(projectFormattedTitle);
      var projectFormattedDates = HTMLprojectDates.replace("%data%", projects.projects[projSumm].dates);
      $(".project-entry:last").append(projectFormattedDates);
      var projectFormattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[projSumm].description);
      $(".project-entry:last").append(projectFormattedDesc);
      for (var image = 0; image < projects.projects[projSumm].images.length; image++) {
          var formatImages = HTMLprojectImage.replace("%data%", projects.projects[projSumm].images[image]);
          console.log (projects.projects[projSumm].images[image]);
          $(".project-entry:last").append(formatImages);
      }
  }
};
projects.display();

// build education summary
// for loop used to to take advantage of data array
education.display = function() {
  for (var edSum=0; edSum < education.schools.length; edSum++) {
      $("#education").append(HTMLschoolStart);
      // $('#education').append(HTMLonlineClasses, HTMLschoolStart);
      var schoolNameFormatted = HTMLschoolName.replace("%data%", education.schools[edSum].name);
      var degreeFormatted = HTMLschoolDegree.replace("%data%", education.schools[edSum].degree);
      var schoolFormatted = schoolNameFormatted + degreeFormatted;
      $(".education-entry:last").append(schoolFormatted);
      var educationFormattedDates = HTMLschoolDates.replace("%data%", education.schools[edSum].dates);
      $(".education-entry:last").append(educationFormattedDates);
      var schoolFormattedLoc = HTMLschoolLocation.replace("%data%", education.schools[edSum].location);
      $(".education-entry:last").append(schoolFormattedLoc);
      var schoolFormattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edSum].majors);
      $(".education-entry:last").append(schoolFormattedMajor);
  }
  // build and format online course work
  $('#education').append(HTMLonlineClasses, HTMLschoolStart);
  for (var onLine=0; onLine < education.onlineCourses.length; onLine++){
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onLine].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onLine].school);
      var formattedonLine = formattedTitle + formattedSchool;
      $(".education-entry:last").append(formattedonLine);
      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onLine].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onLine].url);
		  $(".education-entry:last").append(formattedURL);
	}
};
education.display();

// Adding Location Map
$("#mapDiv").append(googleMap);
