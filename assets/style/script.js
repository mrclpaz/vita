// NavBar

const btnMobile = document.querySelector('.hamburger-btn');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');

    const btn = document.querySelector('.hamburger-btn');
    btn.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Print

const printBtn = document.getElementById('print');

printBtn.addEventListener('click', function() {
    print();
})

// Output

const saveBtn = document.getElementById('save');

    // Personal Details

    const firstName = document.getElementById('first-name');
    const firstNameOutput = document.getElementById('first-name-output');
    const secondName = document.getElementById('second-name');
    const secondNameOutput = document.getElementById('second-name-output');
    const email = document.getElementById('e-mail');
    const emailOutput = document.getElementById('e-mail-output');
    const mobileNumber = document.getElementById('mobile-number');
    const mobileNumberOutput = document.getElementById('mobile-number-output');

    // Profile
    const profile = document.getElementById('profile');
    const profileOutput = document.getElementById('profile-output');
    const occupation = document.getElementById('occupation');
    const occupationOutput = document.getElementById('occupation-output');

    // Education

    const course1 = document.getElementById('course-1');
    const course1Output = document.getElementById('course-1-output');
    const course2 = document.getElementById('course-2');
    const course2Output = document.getElementById('course-2-output');
    const university1 = document.getElementById('university-1');
    const university1Output = document.getElementById('university-1-output');
    const university2 = document.getElementById('university-2');
    const university2Output = document.getElementById('university-2-output');
    const about1 = document.getElementById('about-1');
    const about1Output = document.getElementById('about-1-output');
    const about2 = document.getElementById('about-2');
    const about2Output = document.getElementById('about-2-output');
    const year1 = document.getElementById('year-1');
    const year1Output = document.getElementById('year-1-output');
    const year2 = document.getElementById('year-2');
    const year2Output = document.getElementById('year-2-output');

    // Experience
    const position1 = document.getElementById('position-1');
    const position1Output = document.getElementById('position-1-output');
    const position2 = document.getElementById('position-2');
    const position2Output = document.getElementById('position-2-output');
    const company1 = document.getElementById('company-1');
    const company1Output = document.getElementById('company-1-output');
    const company2 = document.getElementById('company-2');
    const company2Output = document.getElementById('company-2-output');
    const description1 = document.getElementById('description-1');
    const description1Output = document.getElementById('description-1-output');
    const description2 = document.getElementById('description-2');
    const description2Output = document.getElementById('description-2-output');

// Functions
function displayDetails() {

    // Personal Details
    firstNameOutput.innerHTML = firstName.value;
    secondNameOutput.innerHTML = secondName.value;
    emailOutput.innerHTML = email.value;
    mobileNumberOutput.innerHTML = mobileNumber.value;

    // Profile
    profileOutput.innerHTML = profile.value;
    occupationOutput.innerHTML = occupation.value;

    // Education
    course1Output.innerHTML = course1.value;
    course2Output.innerHTML = course2.value;
    university1Output.innerHTML = university1.value;
    university2Output.innerHTML = university2.value;
    about1Output.innerHTML = about1.value;
    about2Output.innerHTML = about2.value;
    year1Output.innerHTML = year1.value;
    year2Output.innerHTML = year2.value;

    // Experience
    position1Output.innerHTML = position1.value;
    position2Output.innerHTML = position2.value;
    company1Output.innerHTML = company1.value;
    company2Output.innerHTML = company2.value;
    description1Output.innerHTML = description1.value;
    description2Output.innerHTML = description2.value;
}

saveBtn.addEventListener('click', displayDetails);
