import profileImage from '../assets/profilePhoto.jpg'

const About = () => {
  return (
    <>
      <div>
        <h1>About ME</h1>
            <div>
                
                <div className='p-5 mt-40'>
                    <figure>
                        <img 
                        className='w-32 h-32 rounded-full object-cover shadow-2xl'
                        src={profileImage} alt="John" />
                    </figure>
                </div>
                <p>Name: John</p>
                <p>age: 24</p>
                <p>Experience: 5 Years, Self taught Photographer who is passionate about capuring the little things in life that bring joy. </p>
                

            </div>
      </div>
    </>
  );
};

export default About;
