const axios = require('axios');

const gitHubApi = (keyword, location) => {
  return axios.get(`https://jobs.github.com/positions.json?description=${keyword}&location=${location}`)
  .then((jobs) => {
    jobRecords = jobs.data;
    return jobRecords.map(job => {
      var cleanJobData = {
        api_id: 'GitHub',
        api_num: true,
        api_job_id: job.id,
        title: job.title,
        date_created: job.created_at,
        job_type: job.type,
        description: job.description,
        company_name: job.company,
        has_company_logo: true,
        company_logo: job.company_logo,
        company_url: job.company_url,
        location: job.location,
        apply_url: job.how_to_apply,
        api_logo: 'https://crossbrowsertesting.com/design/images/github-logo.png'
      }
      return cleanJobData;
    })
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

const authenticApi = (keyword, location) => {
  return axios.get(`https://authenticjobs.com/api/?api_key=0bd10612ef872fbb89961fa6766c14c4&method=aj.jobs.search&keywords=${keyword}&perpage=70&format=JSON&location=${location}`)
  .then((jobs) => {
    jobRecords = jobs.data.listings.listing;
    return jobRecords.map(job => {
      if (!job.company) {
        const cleanJobData = {
          api_id: 'Authentic',
          api_num: false,
          api_job_id: job.id,
          title: job.title,
          date_created: job.post_date,
          job_type: job.type.name,
          description: job.description,
          company_name: '',
          has_company_logo: false,
          company_logo: '',
          company_url: '',
          location: '',
          apply_url: job.apply_url,
          api_logo: 'https://www.authenticjobs.com/assets/images/authentic-jobs/logo-with-circled-jobs-dark.v1498833346.svg'        }
        return cleanJobData;
      } else {
        const cleanJobData = {
          api_id: 'Authentic',
          api_num: false,
          api_job_id: job.id,
          title: job.title,
          date_created: job.post_date,
          job_type: job.type.name,
          description: job.description,
          company_name: job.company.name,
          has_company_logo: false,
          company_logo: job.company_logo,
          company_url: job.company.url,
          location: job.company.location.name,
          apply_url: job.apply_url,
          api_logo: 'https://www.authenticjobs.com/assets/images/authentic-jobs/logo-with-circled-jobs-dark.v1498833346.svg'
        }
        return cleanJobData;
        }
    })
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

const diceApi = (keyword, location) => {
  return axios.get(`http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=${keyword}&city=${location}&pgcnt=20`)
  .then((jobs) => {
    jobRecords = jobs.data.resultItemList
    return jobRecords.map(job => {
      var cleanJobData = {
        api_id: 'Dice',
        job_id: "",
        title: job.jobTitle,
        date_created: job.date,
        job_type: "",
        description: job.description,
        company_name: job.company,
        company_logo: "",
        company_url: "",
        location: job.location,
        apply_url: job.detailUrl,
        api_logo: 'https://assets.dice.com/assets/customer/img/site/dice-logo@2x.png'
      }
      return cleanJobData;
    })
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
  return diceResponseArr;
}

let controller = {};

controller.index = (req, res) => {
  const keyword = req.params.keyword;
  const location = req.params.location;
  Promise.all([gitHubApi(keyword, location), authenticApi(keyword, location)])
  .then((values) => {
    const combinedResponse = values[0].concat(values[1]);
    res
    .status(200)
    .json(combinedResponse);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

module.exports = controller;
