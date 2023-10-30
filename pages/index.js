import Heading from "@/components/user/HomePage/Heading";
import PersonalDetail from "@/components/user/HomePage/Heading/PersonalDetail";
import Layout from "@/components/user/Layout";
import {
  getProjectsData,
  getSocialLinks,
  getUserData,
} from "@/firebase/getDataForHome";

export default function Home({ projects, user, socialLink }) {
  console.log(socialLink, user);
  return (
    <Layout>
      <Heading authorDetails={user} social={socialLink} />
      <PersonalDetail
        email={user.email}
        phoneNumber={user.phoneNumber}
        location={`${user.city}, ${user.country}`}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  let projects = [];
  let user = null;
  let socialLink = [];
  try {
    projects = await getProjectsData();
    user = await getUserData();
    socialLink = await getSocialLinks();
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
  return {
    props: {
      projects,
      user: user[0],
      socialLink,
    },
    revalidate: 120,
  };
}
