import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';

const client = generateClient();

type Info = {
  id: string;
  name: string;
  phone: string;
  address: string;
};

const InfoList = () => {
  const [infos, setInfos] = useState<Info[]>([]);

  useEffect(() => {
    fetchInfos();
  }, []);

  const fetchInfos = async () => {
    try {
      // Type assertion to inform TypeScript about the expected result structure
      const result = await client.graphql({ query: queries.listInfos }) as { data: { listInfos: { items: Info[] } } };
      setInfos(result.data.listInfos.items);
    } catch (err) {
      console.error('Error fetching infos:', err);
    }
  };

  return (
    <div>
      <h2>Info List</h2>
      <ul>
        {infos.map((info) => (
          <li key={info.id}>
            <strong>Name:</strong> {info.name} <br />
            <strong>Phone:</strong> {info.phone} <br />
            <strong>Address:</strong> {info.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoList;
