

const Bistro = () => {
    const backgroundImageStyle = {
        width: '100%',
        height: '510px',
        backgroundImage: 'url(https://i.ibb.co/SxMNz1F/chef-service.jpg)', // replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <div className="mb-28">
      <div style={backgroundImageStyle}>
                
       </div>
            <div className="lg:w-[700px] h-[300px] p-24 space-y-8 text-center mx-auto -mt-96 bg-[#ffff]">
                <h2 className="text-3xl text-black">Bistro Boss</h2>
                <p className="text-black font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                
            </div>
        </div>
    );
};

export default Bistro;