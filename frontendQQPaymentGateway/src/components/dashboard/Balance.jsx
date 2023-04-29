import React from 'react'
import DashboardLayout from '../utils/DashboardLayout'
import { getTokenFromLocalCookie, getTokenFromServerCookie } from '@/lib/auth';

const Balance = () => {
  return (
    <DashboardLayout title="Balance">

      <div>Balance</div>
    </DashboardLayout>

  )
}


export async function getServerSideProps({ req, params }) {
  const { id } = params;
  const jwt =
    typeof window !== 'undefined'
      ? getTokenFromLocalCookie
      : getTokenFromServerCookie(req);
  const filmResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/wallets/${id}`,
    jwt
      ? {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
      : ''
  );
  if (filmResponse.data) {
    const plot = await markdownToHtml(filmResponse.data.attributes.plot);
    return {
      props: {
        film: filmResponse.data,
        plot,
        jwt: jwt ? jwt : '',
      },
    };
  } else {
    return {
      props: {
        error: filmResponse.error.message,
      },
    };
  }
}

export default Balance;
