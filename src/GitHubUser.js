import useGitHub from "./hooks/useGitHub";

const GitHubUser = ({ username }) => {
 
  const {user, loading, error} = useGitHub(username);

  
 // Function to get the first letter of the username
 const getFirstLetter = (username) => {
  return username.charAt(0).toLowerCase();
};

// Get the first letter
const firstLetter = getFirstLetter(username);


    // Function to handle the button click and navigate to the user's profile
    const handleViewProfileClick = () => {
      if (user && user.html_url) {
        window.open(user.html_url, "_blank"); // Open the profile in a new tab
      }
    };
    
  return (
    // Add the first letter as a class to the div
    <div className={`github-user ${firstLetter}`}>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {user && (
        <ul className="details">
          <li>
            <img src={user.avatar_url} alt={user.login} />
          </li>
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Bio:</strong> {user.bio ? user.bio : "NA"}
          </li>
          <li>
            <strong>Location:</strong> {user.location ? user.location : "NA"}
          </li>
          <li>
            <strong>Blog or Site:</strong> {user.blog ? user.blog : "NA"}
          </li>
          <li>
            <strong>Public Repos:</strong>{" "}
            {user.public_repos ? user.public_repos : 0}
          </li>
          <li>
            <strong>Followers:</strong> {user.followers ? user.followers : 0}
          </li>
          <li>
            <strong>Following:</strong> {user.following ? user.following : 0}
          </li>
        </ul>
        
        )}
        <button onClick={handleViewProfileClick}>Visit Profile</button>
    </div>
  );
};
export default GitHubUser;
