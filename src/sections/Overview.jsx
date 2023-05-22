import logo from '../images/logo-mastercraft.svg'
import bookmark from '../images/icon-bookmark.svg'

const Overview = () => {
    return (
        <section className=' bg-white px-6 pb-10 relative bottom-14 rounded-lg'>
            <div className=' flex flex-col items-center'>
                <img src={logo} alt="" className=' relative bottom-7' />
                <div className=' flex flex-col gap-y-4 mb-6'>
                    <h1 className=' font-bold text-xl leading-6 flex flex-col items-center'>
                        Mastercraft Bamboo <span>Monitor Riser</span>
                    </h1>
                    <p className=' text-sm leading-6 text-center text-DarkGray'>
                        A beautifully handcrafted monitor stand to reduce neck and eye strain.
                    </p>
                </div>
                <div className=' flex items-center justify-between w-full'>
                    <button className=' bg-ModerateCyan px-[42px] pt-[17px] pb-[19px] rounded-[33.5px] font-bold text-base leading-5 text-white'>
                        Back this project
                    </button>
                    <div>
                        <img src={bookmark} alt="bookmark-icon" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Overview;