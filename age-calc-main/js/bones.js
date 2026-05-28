document.getElementById( "calc-age" ).onclick = function ()
{
    let yearE = document.getElementById( "year" ).value,
        monthE = document.getElementById( "month" ).value;
    let dayE = document.getElementById( "day" ).value,
        dateOfB = `${ monthE } ${ dayE } , ${ yearE }`
    let inputValue = `your date of birth is   ${ monthE } ${ dayE } , ${ yearE }`,
        forDate = Date.parse( dateOfB );
    let forNow = Date.now(),
        ageMs = forNow - forDate, second = 1000;
    let minute = second * 60,
        hour = minute * 60, day = hour * 24,
        year = day * 365.25;
    let years = Math.round( ageMs / year ),
        months = years * 12, week = months * 4, days = week * 7;
    let hours = Math.round( ageMs / hour ),
        minuts = hours * 60, seconds = Math.round( ageMs / second );
    let yearOutbut = document.getElementById( "year-outbut" ),
        monthOutbut = document.getElementById( "month-outbut" );
    let weekOutbut = document.getElementById( "week-outbut" ),
        dayOutbut = document.getElementById( "day-outbut" );
    let hourOutbut = document.getElementById( "hour-outbut" ),
        minOutbut = document.getElementById( "min-outbut" );
    let secondOutbut = document.getElementById( "second-outbut" ),
        msOutbut = document.getElementById( "ms-outbut" );
    let currentYear = new Date().getFullYear();
    if ( yearE === "" || yearE > currentYear || monthE === "" || monthE > 12 || dayE === "" || dayE > 31 )
    {
        document.getElementById( "your-date" ).innerHTML = "Plese Tell Us Your Full Date of Birthday";
    } else
    {
        let currentMonth = new Date().getMonth() + 1;
        if ( Number( monthE ) > currentMonth )
        {
            --years
        }
        document.getElementById( "youe-age" ).classList.toggle( "active" );
        yearOutbut.innerHTML = `youe age in years is : ${ years }`;
        monthOutbut.innerHTML = `youe age in monthes is : ${ months }`;
        weekOutbut.innerHTML = `youe age in weeks is : ${ week }`;
        dayOutbut.innerHTML = `youe age in days is : ${ days }`;
        hourOutbut.innerHTML = `youe age in hours is : ${ hours }`;
        minOutbut.innerHTML = `youe age in minutes is ${ minuts }`;
        secondOutbut.innerHTML = `youe age in seconds is ${ seconds }`;
        msOutbut.innerHTML = `youe age in monthes is ${ ageMs }`;
        document.getElementById( "your-date" ).innerHTML = inputValue;
    }
}

