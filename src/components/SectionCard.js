import React from 'react';
import { Card,Button} from 'antd';
import Link from 'next/link';

const SectionCard = ({title,link,data}) => (
<>
{
title === "Upcoming Releases" || title==="Movie Reviews" || title==='Recent OTT' ||  title==='AboutCinema' || title==='About Celebraty' ?
<>
<Card title={title} className={title ==='Movie Reviews' ? 'review-card' : title === 'Upcoming Releases' ? "upcoming-card": 'section-card'}   hoverable bordered={true}>
<div className="rounded d-flex flex-column jusitfy-content-center align-items-center gap-2 mb-2">
<img src={"https://image.tmdb.org/t/p/w500/"+data[0]?.poster_path} alt={title} width={'180px'} height={'220px'} />
            <p>{data[0]?.title}</p>
</div>

<div className="rounded d-flex flex-column jusitfy-content-center align-items-center gap-2 mb-2">
<img src={"https://image.tmdb.org/t/p/w500/"+data[1]?.poster_path} alt={title} width={'180px'} height={'220px'} />
            <p>{data[1]?.title}</p>
</div>

<Button><Link href={'/movieWorld/upcomingReleases'}>View More</Link></Button>
      </Card>
</>:<></>
}

{
title === 'Movie News' ? <>
       <Card title={title} className='section-card' hoverable bordered={true}>
<div className="rounded d-flex flex-column jusitfy-content-center align-items-center gap-2 mb-2">
<img src={data[0]?.urlToImage} alt={title} width={'180px'} height={'220px'} />
            <p>{data[0]?.title}</p>
</div>

<div className="rounded d-flex flex-column jusitfy-content-center align-items-center gap-2 mb-2">
<img src={data[1]?.urlToImage} alt={title} width={'180px'} height={'220px'} />
            <p>{data[1]?.title}</p>
</div>

<Button><Link href={'/movieNews'}>View More</Link></Button>
      </Card>
      </>
          
      :<></>
    }

      </>


);

export default SectionCard;