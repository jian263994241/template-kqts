import { Helmet } from 'react-helmet-async';

export async function loader() {
  return {};
}

export default function PageIndex() {
  return (
    <>
      <Helmet>
        <title>index</title>
      </Helmet>

       <div>index</div>
    </>
  )
};

export const element = <PageIndex />;
