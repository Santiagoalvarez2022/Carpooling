// Header.jsx
const Header = ({ name, profilePicture }) => {
    return (
      <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <div className="flex items-center">
          <img
            src={profilePicture}
            alt={`${name}'s profile`}
            className="w-12 h-12 rounded-full"
          />
          <span className="ml-4 text-lg font-bold">{name}</span>
        </div>
        <a href="#contact" className="text-sm font-semibold">
          Contacto
        </a>
      </header>
    );
  };
  
  export default Header;
  