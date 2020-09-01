import _, { map } from 'underscore';
import '../bootstrap.min.css';
import '../resume.css';
// import fetch from 'isomorphic-unfetch';
// import useSWR from 'swr';
import Head from 'next/head';

import resumedata from '../resume-data';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Hobbies from '../components/Hobbies';
import Experience from '../components/Experience';

// For usage with useSWR, which wouldn't make much sense for a resume since you want your content indexed by the search engines
// async function resumefetcher(url) {
//     const res = await(fetch(url));
//     const json = await res.json();
//     return json; //fetch(url).then(r => r.json());
// }

function Index({ resumedata }) {
    // playing around with useSWR
    // const { data, error } = useSWR('/api/resumeData', resumefetcher);
    // if (error) return <div>Failed to Load Resume Data</div>;
    // if (!data) return <div>Loading Resume Data!</div>;

    return (
        <>
        <Head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <title>{resumedata.pagetitle}</title>
        </Head>

        <Layout
            header={Header({resumedata: {...resumedata?.header, ...resumedata?.contactinfo}})}
            experience={Experience({experiencelist: resumedata?.experience?.data})}
            skills={Skills(resumedata?.skills?.data.sort())}
            hobbies={Hobbies(_.sortBy(resumedata?.hobbies?.data, 'hobby'))}
        />
        </>
    )
}

Index.getInitialProps = async () => {
    // Use something like this to pull data from a remove server
    // const res = await fetch('http://myremotehostedata/api/resumeData');
    return { resumedata };
}

export default Index;