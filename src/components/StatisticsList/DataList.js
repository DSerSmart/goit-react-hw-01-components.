import { Data } from 'components/Statistics/Data';

export const DataList = ({ data }) => {
  return (
    <div>
      {data.map((data, idx) => (
        <Data key={idx} data={data} />
      ))}
    </div>
  );
};
