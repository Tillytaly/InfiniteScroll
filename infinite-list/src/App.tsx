import MoreAndMorePeople from "./Components/MoreAndMorePeople";
import { useApp } from "./Helpers/Hooks/useApp";
import { Container } from "./Components/Container";
import styles from "./App.module.scss";

const { paragraph, big } = styles;
const urlToFetchData = "https://randomuser.me/api/?inc=name,dob,picture,gender&results=10&noinfo"

function App() {
  const { isLoading, humanData, isError, message, loadMoreRef } = useApp(urlToFetchData);

  if (isError) return <p className={`${paragraph} ${big}`}>{message}</p>

  return (
    <Container>
      {humanData.length > 0 && <MoreAndMorePeople people={humanData} />}
      <div ref={loadMoreRef}/>
        {isLoading && <p className={paragraph}>{message}</p>}
    </Container>
  );
}

export default App;
