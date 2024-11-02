import { BarChart, Bar, XAxis, YAxis, Line, CartesianGrid,Cell,Tooltip } from 'recharts';
import { useLoaderData } from 'react-router-dom';
const colors = ['#0085F6','#00C29C', '#FBB929', '#FC8042', '#FB0100']
const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Pages_Chart = () => {
    const books = useLoaderData();
    const readBooksStr = localStorage.getItem('read');
    const readBooks = readBooksStr ? JSON.parse(readBooksStr) : [];
    const readList = books.filter(book => readBooks.includes(String(book.bookId)));
    return (
      <div className='max-w-[1170px] rounded-xl h-fit md:h-[756px] mt-8 mx-auto flex justify-center items-center bg-[#f3f3f3]'>
            <BarChart width={955} height={479} data={readList}>
                <Line type="monotone" dataKey="totalPages" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis interval={0} tick={{width:80, overflow:'hidden'}}  dataKey="bookName" />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar dataKey="totalPages" fill="#f3f3f3" shape={<TriangleBar />} >
                    {readList.map((book, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
      </div>
    );
};

export default Pages_Chart;