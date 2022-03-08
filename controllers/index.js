const axios = require('axios').default;
async function getNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=80e1ed93b4284b5c8c358c1ca2047c16"
    let result = await axios.get(url)
    // let daytime = result.data.articles[0].publishedAt.split("T")
    // let day = daytime[0]
    // let time = daytime[1] 
    return result.data.articles

}
function getTestResult() {
    const data = [
        {
            "date": "2022-01-10",
            "time": "16:00IST",
            "teams": ["India", "Srilanka"],
            "Result":"India won",
            "venue": "Kolkata"
        },
        {
            "date": "2022-02-12",
            "time": "11:00IST",
            "teams": ["Australia", "Pakistan"],
            "Result":"Australia won",
            "venue": "Sydney"
        }
    ]
    return data
}
function getUpcomingTest() {
    const data =  [{
        "date": "2022-04-10",
        "time": "16:00IST",
        "teams": ["India", "Srilanka"],
        "venue": "Kolkata"
    },
    {
        "date": "2022-04-12",
        "time": "10:00IST",
        "teams": ["Australia", "Pakistan"],
        "venue": "Sydney"
    },
    {
        "date": "2022-04-12",
        "time": "10:00IST",
        "teams": ["Australia", "India"],
        "venue": "New Delhi"
    },
    {
        "date": "2022-04-12",
        "time": "10:00IST",
        "teams": ["Bangladesh", "Pakistan"],
        "venue": "Jaipur"
    },
    {
        "date": "2022-04-12",
        "time": "10:00IST",
        "teams": ["New Zealand", "Nepal"],
        "venue": "Mumbai"
    }
    ]
    return data
}
function getUpcomingOdi() {
    const data =  [{
        "date": "2022-06-10",
        "time": "16:00IST",
        "teams": ["India", "Srilanka"],
        "venue": "Rachi"
    },
    {
        "date": "2022-04-12",
        "time": "11:00IST",
        "teams": ["India", "Pakistan"],
        "venue": "Sydney"
    },
    {
        "date": "2022-08-15",
        "time": "09:00IST",
        "teams": ["Australia", "India"],
        "venue": "New Delhi"
    }
    
    ]
    return data
}
function getUpcomingT20() {
    const data =
        [{
            "date": "2022-04-10",
            "time": "16:00IST",
            "teams": ["India", "Srilanka"],
            "venue": "Kolkata"
        },
        {
            "date": "2022-04-12",
            "time": "10:00IST",
            "teams": ["Australia", "Pakistan"],
            "venue": "Sydney"
        },
        {
            "date": "2022-04-12",
            "time": "10:00IST",
            "teams": ["Australia", "India"],
            "venue": "New Delhi"
        },
        {
            "date": "2022-04-12",
            "time": "10:00IST",
            "teams": ["Bangladesh", "Pakistan"],
            "venue": "Jaipur"
        },
        {
            "date": "2022-04-12",
            "time": "10:00IST",
            "teams": ["New Zealand", "Nepal"],
            "venue": "Mumbai"
        }
        ]
    return data;
}
function getStadiumDetails() {
    const data = [{
        "Capacity": "30000",
        "Tenant": "Troy Trojans",
        "Type": "Cricket Ground",
        "Stadium": "Arun Jaitley Stadium",
        "Location": "New delhi "
    },
    {
        "Capacity": "33000",
        "Tenant": "Troy Trojans",
        "Type": "Cricket Ground",
        "Stadium": "Wankhede Stadium",
        "Location": "Mumbai "
    }

]
   
    return data;
}
function getQuiz() {
    const data =
    [{
        "question1": "\n 1.Who won the cricket world cup 2019? \n A. India \n B. England \n C. New Zealand \n D. Australia ",
        "answer": "B"
    },

     
    {
        "question2": "2. Who is known as Jumbo? \n A. Ishant Sharma \n B. Rahul Dravid \n C. Harbhajan Singh \n D. Anil Kumble ",
        "answer": "D"
    },

    {
        "question": "3. Who was the Player of the series in 2019 World Cup? \n A. Kane Williamson \n B. Ben Stokes \n C. Rohit Sharma \n D. Shakib Al Hasan ",
        "answer": "A"
    },
    {
        "question": "4. Who was the Player of the series in IPL 2020? \n A. Marcus Stoinis \n B. Trent Boult \n C. Jofra Archer \n D. Kagiso Rabada?  ",
        "answer": "C"
    }]

    


    return data;
}
function getMatchDetails() {
    const data = 9;
    return data;
}

module.exports = {
    getNews,
    getTestResult,
    getUpcomingTest,
    getUpcomingOdi,
    getUpcomingT20,
    getStadiumDetails,
    getQuiz,
    getMatchDetails,
};