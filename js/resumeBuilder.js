/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var skills=['C Programming','C++ Programming','Java','Python','Javascript'];
 var education={
"secondary":{
	'schoolName':'State Subsidised High School Mananpur',
	'schoolStart':'January 2010',
	'schoolDegree':'10th',
	'schoolDate':'March 2011',
	'schoolLocation':'Mananpur-811310,Lakhisarai,Bihar',
	'schoolMajor':'General Subjects'
},
"higherSecondary":{
'schoolName':'Gorsi Public School,Jaipur',
	'schoolStart':'April 2011',
	'schoolDegree':'12th',
	'schoolDate':'March 2013',
	'schoolLocation':'Shanti Nagar,Jaipur,New Sanganer Road,Near Gurjer Ki thadi,302019',
	'schoolMajor':'Science Mathamatics'

},
"undergraduate":
{
	'schoolName':'National Institute of Technology, Manipur',
	'schoolStart':'Aug 2014',
	'schoolDegree':'Bachelor of Technology',
	'schoolDate':'May 2018',
	'schoolLocation':'Langol ,Impahl-West-795004,Manipur',
	'schoolMajor':'Computer Science and Engineering'
}
 };

 var projects={
 "prj1":{
   "projectTitle":"A Simple Audio/Video Media Player",
   "projectDate":"Nov 2016 to Dec 2016",
   "projectDesc":"",
   "projectImage":""
 },
 "prj2":
 {
 	"projectTitle":"A Simple Blog ",
    "projectDate":"Aug 2016 to Oct 2016",
    "projectDesc":" A simple Blog where any one share text/images etc.",
	"projectImage":""
 },
 "prj3":{
 	"projectTitle":"A Simple Audio/Video Media Player",
    "projectDate":"Nov 2016 to Dec 2016",
    "projectDesc":"",
    "projectImage":""
 }
 
 };
var onlineClasses={
"ocls1":
{
	'onlineClassTitle':'Introduction to Modern Application Development',
	'onlineClassSchool':'Indian Institute of Technology ,Madras',
	'onlineClassDate':'Aug 2016 to Oct 2016',
	'onlineClassUrl':'https://onlinecourses.nptel.ac.in/noc16_cs23'
}

};

function displayOnlineClasses(){
 for(onlc in onlineClasses)
 {
 	$()
 }

}
 function displayProjects()
 {
 	for(proj in projects)
 	{
 		$('#projects').append(HTMLprojectStart);
 		var formattedProjectTitle=HTMLprojectTitle.replace('%data%',projects[proj].projectTitle);
 		$('.project-entry:last').append(formattedProjectTitle);
 		var formattedProjectDates=HTMLprojectDates.replace('%data%',projects[proj].projectDate);
 		$('.project-entry:last').append(formattedProjectDates);
 		var formattedProjectDescription=HTMLprojectDescription.replace('%data%',projects[proj].projectDesc);
 		$('.project-entry:last').append(formattedProjectDescription);
 		var formattedProjectImage=HTMLprojectImage.replace('%data%',projects[proj].projectImage);
 		$('.project-entry:last').append(formattedProjectImage);

 	}
 }
function displayEduaction()
 {
 	for( edu in education)
 	{
 		$('#education').append(HTMLschoolStart);
 		var formattedSchoolName=HTMLschoolName.replace('%data%',education[edu].schoolName);
 		var formattedSchoolDegree=HTMLschoolDegree.replace('%data%',education[edu].schoolDegree);
		$('.education-entry:last').append(formattedSchoolName+formattedSchoolDegree);
		var formattedSchoolDate=HTMLschoolDates.replace('%data%',education[edu].schoolDate);
		$('.education-entry:last').append(formattedSchoolDate);
        
		var formattedSachoolLocation=HTMLschoolLocation.replace('%data%',education[edu].schoolLocation);
		$('.education-entry:last').append(formattedSachoolLocation);

		var formattedMajor=HTMLschoolMajor.replace('%data%',education[edu].schoolMajor);
		$('.education-entry:last').append(formattedMajor);


 	}
 }


 var bio={
 	'name':'Kamlesh Kumar',
 	'role':'Web Developer',
 	'mob':'9414788459',
 	'email':'kamleshbhalui@gmail.com',
 	'linkdin':'https://github.com/kamleshbhalui',
 	'twitter':'https://twitter.com/kbhalui',
 	'github':'https://www.linkedin.com/in/kamlesh-kumar-b18365129/',
 	'blog':'https://manthan-148412.appspot.com/',
 	'imageurl':'https://pic-588ku.pngtree.com/element_origin_min_pic/00/01/13/90567c99466f426.jpg',
 	'profilepic':'images/fry.jpg',
 	'welcomemsg':'Where trouble melts like lemon drop away above the chimney tops that\'s where you will find me',
 	'skills':skills,
 	'location':'NIT Manipur,Langol,Imphal-795004'
 };
var schools={
'schoolStart':'15th August 2014',
'schoolName':'National Institute of Technology Manipur',
'schoolDegree':'Bachelor of Technology',
'schoolDate':'May 2018',
'school Location':'Langol,Impahl-West-795004',
'schoolMajor':'Computer Science and Technology'

};
var formattedName=HTMLheaderName.replace("%data%",bio.name);
$('#header').append(formattedName);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$('#header').append(formattedRole);
var formattedcontact=HTMLcontactGeneric.replace('%contact%','Contacts:').replace('%data%','My Contacts');
$('#header').append(formattedcontact);
var foramatmobile=HTMLmobile.replace('%data%',bio.mob);
$('#header').append(foramatmobile);
var formatemail=HTMLemail.replace('%data%',bio.email);
$('#header').append(formatemail);

var formattTwiiter=HTMLtwitter.replace('%data%',bio.twitter);
$('#header').append(formattTwiiter);
var formmattedGithub=HTMLgithub.replace('%data%',bio.github);
$('#header').append(formmattedGithub);
var formattedBlog=HTMLblog.replace('%data%',bio.blog);
$('#header').append(formattedBlog);
var formattedLocation=HTMLlocation.replace('%data%',bio.location);
$('#header').append(formattedLocation);
var formattedBioPic=HTMLbioPic.replace('%data%',bio.profilepic);
$('#header').append(formattedBioPic);
var formattedWelcomMsg=HTMLwelcomeMsg.replace('%data%',bio.welcomemsg);
$('#header').append(formattedWelcomMsg);
$('#header').append(HTMLskillsStart);

for(var i=0;i<bio.skills.length;i++){
var formattedSkills=HTMLskills.replace('%data%',bio.skills[i]);
$('#skills').append(formattedSkills);
}

// $('#projects').append(HTMLprojectStart);
// var formattedProjectTitle=HTMLprojectTitle.replace('%data%','A Simple Blog Developed');
// $('#projects').append(formattedProjectTitle);
// var formattedProjectDates=HTMLprojectDates.replace('%data%','12-12-2017 to 12 -12 -2018');
// $('#projects').append(formattedProjectDates);
// var formattedProjectDescription=HTMLprojectDescription.replace('%data%','It is simple blog like webpage so user can share their contents');
// $('#projects').append(formattedProjectDescription);
displayEduaction();
displayProjects();