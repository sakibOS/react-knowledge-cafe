
import Profile from '../../assets/img/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h3 className="text-4xl font-bold">Knowledge Cafe</h3>
            <img src={Profile} alt="" />
            
        </header>
    );
};

export default Header;