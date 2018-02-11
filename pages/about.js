export default () => (
  <div className="about-content">
    <p>
      Our story began in early 2014. Brian planned the first date and kept it a secret until we arrived at
      the go-kart racing track. Though Alex is not a fan of fast moving, adrenaline inducing activities,
      she put on a brave face just for him. Now that he knows her, he won’t be taking her on those types
      of dates anymore. In May, we welcomed Bella, our first puppy, into our family. By August of 2014
      we set off on our first big adventure. 8 days in a moving truck with a 6-month-old puppy. Destination:
      Providence, Rhode Island. Brian started his first official job as a software engineer, and Alex
      quickly moved up the ranks of Starbucks and became a store manager. In December of 2015 we welcomed
      our second puppy into our family, Luna. In our free time, we would travel near and far. Exploring
      New England, the east coast, Canada, and the south.
      <br />
      <br />
      In December of 2015 we set off on the 32-hour
      flight to New Zealand, with a quick pit stop in China. The 21-day trip was meticulously planned by
      Alex. We were to camp in a campervan from the northern tip of the North Island to the southern tip
      of the South Island. On Christmas Eve, after a day of spelunking and glow worm hunting, we found a
      place to camp at the Mangapohue Natural Bridge. Just outside of the town of Te Anga.
    </p>

    <div className="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HkchkaZasZA?color=white&modestbranding=1&rel=0&showinfo=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen></iframe>
    </div>

    <h2 className="left">The (First) Proposal</h2>

    <div className="sub-left">
      <div className="about-image">
        <img src="/static/proposal_1.jpg" />
      </div>

      <p className="left">
        After dinner, we set off on a hike to the natural bridge. We walked through a rainforest until
        we saw the giant rock formation. After climbing up the stairs into the bridge we found a meadow
        on the other side with large boulders. We decided to investigate. Brian quickly set up a time
        lapse on the GoPro to capture our exploration. As we walked up to the rocks we found fossils of
        shells and small creatures. We took a second to admire the scene around us, and then Brian turned
        and looked at Alex. That’s when time stood still. Brian got down on one knee and asked if we could
        spend the rest of our lives together. Alex said yes.
      </p>
    </div>

    <div className="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4B8HXNkeApI?color=white&loop=1&modestbranding=1&rel=0&showinfo=0&controls=0&playlist=4B8HXNkeApI&autoplay=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen></iframe>
    </div>

    <h2 className="right">The (Second) Proposal</h2>

    <div className="sub-right">
      <div className="about-image">
        <img src="/static/proposal_2.jpg" />
      </div>

      <p className="right">
        Little did Brian know that Alex had been planning on proposing to him all along. On December
        31st, three years to the day that we met, we set out on a walk along the beach in Greymouth,
        New Zealand. It was a rainy day, but we were determined to enjoy the beach as much as we could.
        Before we got back to our campsite we stopped and watched the waves washing over the pebbles
        on the beach, we watched a kiwi bird run past us and into the clearing behind us, and for a
        second the rain subsided. Alex looked at Brian and pulled out the ring explaining that though we
        were already engaged she wanted to go through with her plan of proposing. It was a shock to Brian,
        but also not all that surprising. He put the ring on, and he said yes, again.
      </p>
    </div>


    <h2>The Ceremony</h2>

    <p>
      In June of 2017 we packed up our house and our dogs and set off across the country again. This
      time to Mountain View, California. The unexpected move changed our original wedding plans. In
      classic Alex and Brian fashion, as we discussed the changes we made a joke that we should just
      get married right away. That joke turned into light planning. Which then turned into a fully formed
      idea. When it was officially decided that we would get married, we had 48 days to plan our ceremony.
      So, we called our immediate families, and said, “First, we aren’t pregnant.” then made sure they
      could attend if we pulled it off. We were married in an intimate, elopement style ceremony up by
      a lake in central oregon. Afterward, we headed to a local brewery for dinner, drinks, and games.
    </p>


    <h2>And Now</h2>

    <p>
      Now, we are feverishly planning our reception, excited to celebrate with our friends and family.
      The reception will be located in Central Oregon where Alex grew up. The hall is located on a pond
      where Alex and her family fished and spent time together. The food, drinks, and desserts have all
      been chosen to highlight Bend, Oregon’s finest. There will be dancing, a photo booth, and lawn games
      so fun can be had by all. We look forward to celebrating with everyone and for the many new memories
      we can add to our story!
    </p>
    <style jsx>{`
      h2 {
        padding-top: 40px;
        padding-left: 40px;
        padding-right: 40px;
      }

      .left {
        text-align: left;
      }

      .right {
        text-align: right;
      }

      .about-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 10px;
      }

      .video {
        padding: 55px 0 10px 0;
        text-align: center;
        overflow: hidden;
        position: relative;
        width: 100%;
      }

      .sub-left {
         max-width: 850px;
         margin-left: 0;
         margin-right: auto;
      }

      .sub-right {
         max-width: 850px;
         margin-right: 0;
         margin-left: auto;
      }

      .sub-left .about-image {
        float: left;
      }

      .sub-right .about-image {
        float: right;
      }

      .about-image {
        max-width: 200px;
        padding: 0 40px;
      }

      .about-image img {
        width: 100%;
      }
    `}</style>
  </div>
)
