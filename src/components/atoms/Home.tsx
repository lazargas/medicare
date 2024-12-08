"use client"
import { DNA } from "react-loader-spinner";
import Grid from "./Grid";
import { memo, useState } from "react";




function HomePage(props: any) {
  const {blogs} = props;
  const [loader, setLoader] = useState<boolean>(false);
  const { user, title } = props;

  return (
    <>
      <div className="container">
        {
          loader || blogs.length === 0 ?
            <div className=" h-[80dvh] w-full flex justify-center items-center" >
              <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
            :
            <>
            <Grid blogs={blogs} title={title} />
            <Grid blogs={blogs.slice(0,3)} title='Related Posts' />
            </>
            
        }
        <style jsx>{`
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
`}</style>
      </div>
    </>
  );
}
export default memo(HomePage);