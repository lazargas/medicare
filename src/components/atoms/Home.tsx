"use client"
import Grid from "./Grid";
import { memo } from "react";
function HomePage(props: any) {
  const { blogs } = props;
  const { title } = props;
  return (
    <>
      <div className="container">
        <Grid blogs={blogs} title={title} />
        <Grid blogs={blogs.slice(0, 3)} title='Related Posts' />
        <style jsx>{`
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
`}</style>
      </div >
    </>
  );
}
export default memo(HomePage);