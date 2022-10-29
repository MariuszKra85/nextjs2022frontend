import styled from 'styled-components';
import DemoCarousel from '../components/Carousel';
import Person from '../components/Person';
import TextBox from '../components/TextBox';

const Wrapper = styled.div`
  margin-top: 6rem;
`;

const WrapperPic = styled.div`
  width: 100%;
  max-width: 370px;
  height: 360px;
  position: relative;
  padding: 1rem;
  margin: 2rem auto 15rem auto;
`;

const Picture = styled.img`
  right: 2px;
  width: 210px;
`;
const Picture2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 2px;
  width: 210px;
  height: 230px;
`;

export default function aboutus() {
  return (
    <Wrapper>
      <DemoCarousel showThumbs={false} />
      <h3>about us</h3>
      <TextBox
        key="1"
        el={{
          title: 'WELCOME TO SALSA FREEDOM',
          text: 'Salsa can now be found all around the world. Salsa dancing is exuberant, fiery, fun, sexy and flirtatious; one of today’s most popular dancing style especially here in the UK. It attracts people all over the world with different culture, abilities and background. Learning salsa is a great way of exercising, meeting people and gives you a great expansion in your social life.',
          link: [{ name: 'cantact us', link: '/contact' }],
        }}
      />
      <TextBox
        key="2"
        el={{
          title: 'HOW WE DO',
          text: ' Here in Salsa Freedom, we cater classes from absolute beginners to advance dancers. If you are a complete beginner, really fancy mastering salsa quickly and stress free, don’t look away. All you need is dedication and let us do the rest! We believe that in order to learn salsa quickly is to swap dancing partners frequently therefore we are teaching Rueda De Casino. Rueda De Casino or commonly called Salsa Rueda. The style of salsa that we will be teaching is Cuban; Pairs of dancers form a circle are called Rueda where everyone dances in unison and partners are switched between moves.',
          link: [{ name: 'cantact us', link: '/contact' }],
        }}
      />
      <WrapperPic>
        <Picture
          src="https://res.cloudinary.com/mariuszkra85/image/upload/v1667051536/Salsa/salsa3_tsbfaa.jpg"
          alt="dancer 1"
        />
        <Picture2
          src="https://res.cloudinary.com/mariuszkra85/image/upload/v1666652541/Salsa/pylon-1287823-scaled_xx7a8o.jpg"
          alt="dancer 2"
        />
      </WrapperPic>
      <TextBox
        key="1"
        el={{
          title: "WHY WE'RE HERE",
          text: 'Our main goal is to share our passion and knowledge for salsa dancing to people from all ability, background and age. We would like to aim for everyone to get dancing in no time. We will always try our hardest to share all of our skills and allow you to have fun at the same time. We provide Cuban Salsa Drop-In classes, 3 times a week, in the heart of Manchester City Centre Northern Quarters and Chorlton Cum Hardy. Cuban salsa is a partner dance however no partner is necessary in our classes. We can challenge you as much or little depends on how you progress.',
          link: [{ name: 'Our Place', link: '/contact' }],
        }}
      />
      <TextBox
        key="1"
        el={{
          title: 'TAKE A SALSA DANCE LESSON WITH ONE OF THESE INSTRUCTORS',
          text: 'A salsa dance lesson with one of these instructors will help you hone in your salsa dancing skills. You can choose to take private or group dance lessons. If you are a quick learner, private salsa lessons may be the best way to go. You will receive one on one instruction and you can progress very quickly to the next level. They are crucial if you want to progress to a professional level in the least amount of time. Group salsa dance lessons are ideal for a casual salsa dancer. They are very affordable (Contact for prices). Partners are switched frequently which allow you to learn to dance with different people of varying dance abilities. It also prevents you from getting stuck with one person who may be having trouble. Group lessons usually have a large number of people, so sometimes individual attention may suffer. So remember to speak up and ask questions if you have one.',
          link: [{ name: 'Our Team', link: '/ourteam' }],
        }}
      />
      <Person 
      img={{name:"jordan", url: "https://res.cloudinary.com/mariuszkra85/image/upload/v1664403229/Salsa/jordan_kfa6vv.jpg",}} 
      name="Jordan" 
      disc="Jordan has been dancing at a very young age. He moved to the UK in 2007."/>
    </Wrapper>
  );
}
