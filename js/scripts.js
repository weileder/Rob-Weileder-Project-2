//Variable declarations
var title = '2019 Ram 2500';
var reviewTitle = '2019 Ram 2500 - What It Can Do For You';
var author = 'by Rob Weileder';


//Get the elements for the ids
var jst = get('title');
var jsrt = get ('reviewTitle');
var jsa = get('author');
//Inject contect into ids
jst.textContent = title;
jsrt.textContent = reviewTitle;
jsa.textContent = author;

//Data for simulating a database
var data = [
  {
    name: 'The Ram 2500 has been redesigned from the ground up for 2019.',
    descrip: 'With an all new frame consisting of 98.5% high-strength steel, six cross members, fully boxed rear rails, and hydroformed main rails, the truck has ' +
            'improved rigidity and weighs less. There are two engine options available for the Ram 2500: 6.4L HEMI, and 6.7L Cummins diesel.' +
            'The 6.4L HEMI (410 hp at 5,600 rpm and 429 lb-ft torque at 4,000 rpm) is mated to an all new 8-Speed 8HP75-LCV automatic transmission, while the ' +
            '6.7L Cummins diesel (370 hp at 2,800 rpm and 850 lb-ft torque at 1,700 rpm) is mated with an updated 6-Speed 68RFE ' +
            'automatic transmission.',
    selector: 'p1'
  },
  {
    name: 'Payload and Towing Capacities',
    descrip: 'Ram 2500 comes with a payload capacity of up to 4,050 lbs and a towing capacity of up to 17,580 lbs (reg cab 2wd model with 6.4L HEMI gasoline engine).' +
            ' Due to the increased weight of the 6.7L Cummins diesel engine, the payload capacity is reduced to 3,260 lbs. The 6.7L Cummins diesel engine option increases' +
            ' towing capacity to 19,780 lbs. Please visit the Ram Trucks website for more detailed towing specs.',
    selector: 'p2'
  },
  {
    name: 'Conclusion',
    descrip: 'The 2019 Ram 2500 continues to do what it was made for, haul heavy loads with minimal effort. This is accomplished while providing a comfortable command center' +
            ' to traverse the open highway.',
    selector: 'p3'
  }
];

//Utility Functions
function get(element) {
  return document.getElementById(element);
}

//Application Functions
//Package Contructor
function Package(data) {
  this.name = data.name;
  this.descrip = data.descrip;
  this.selector = data.selector;
};

//Writing to Page
function writePackageInfo(package) {
    //Refer to elements
    var selector = package.selector,
      nameE1 = document.getElementById(selector + '-name');
      descripE1 = document.getElementById(selector + '-descrip');

    //Write to elements
    nameE1.textContent = package.name;
    descripE1.textContent = package.descrip;
  };

function textFocus() {
  get('message-input').focus();
}

function makeItHappen() {
  //write package data
  for (let i = 0; i < data.length; i++) {
    const package = data[i];
    console.log(package.name);
    writePackageInfo(package);
    textFocus();
  };
}

function submitText() {
  //get message text to verify a message was sent
  var submitMessage = get('message-input');
  messageLength = submitMessage.value;
  //check length of string
  if (messageLength.length != 0) {
    alert('Thank you for submitting a comment. Have a pleasant day!');
  }
  else {
    alert('Your comment failed to send due to it being empty. \nPlease enter a comment and hit the send button.');
  }
  clearText();
}

function clearText() {
  //clear the contents of the comment box
  var commentText = get('message-input');
  commentText.value='';
  textFocus();
}

//wire up the event handlers
window.addEventListener('load', function() {
  var submitButton = get('submit-button');
  var clearButton = get('clear-button');

  submitButton.addEventListener('click', submitText, false);
  clearButton.addEventListener('click', clearText, false);
})

//Call the function to perform the required tasks
makeItHappen();
