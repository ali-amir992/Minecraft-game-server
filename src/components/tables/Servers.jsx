function ServerHeader({ title }) {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {title}
    </th>
  );
}

function ServerRow({ data }) {
  let statusClass = " bg-green-100 text-green-700";
  if (data.status === "angry") {
    statusClass = " bg-red-100 text-red-700";
  }
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{data.ip_and_port}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{data.work}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={
            "px-2 py-1 text-sm font-medium rounded-full capitalize" +
            statusClass
          }
        >
          {data.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">
        {data.address}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <a href="!#" className="bg-indigo-100 px-3 py-2 rounded text-indigo-600 hover:text-indigo-800">
          Edit
        </a>
      </td>
    </tr>
  );
}

function Servers() {
  const users = [
    {
      ip_and_port: "192.212:121",
      work: "12 AM TO 3 PM",
      status: "active",
      address: "192.123.1232.12",
    },
    {
      ip_and_port: "192.212:121",
      work: "12 AM TO 3 PM",
      status: "active",
      address: "92.123.1232.12",
    },
    {
      ip_and_port: "192.212:121",
      work: "12 AM TO 3 PM",
      status: "active",
      address: "92.123.1232.12",
    },
    {
      ip_and_port: "192.212:121",
      work: "12 AM TO 3 PM",
      status: "Inactive",
      address: "92.123.1232.12",
    },
  ];

  return (
    <div className="flex flex-col space-y-2 font-secondry">
      <h2 className="font-medium text-2xl">Servers</h2>
      <div className="shadow overflow-x-auto rounded-md">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <ServerHeader title="Ip and Port" />
              <ServerHeader title="Slots" />
              <ServerHeader title="Status" />
              <ServerHeader title="address" />
              <th
                scope="col"
                className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                <span></span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {users.map((d, i) => {
              return <ServerRow key={i} data={d} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row-reverse">
        <nav
          className="rounded-md border divide-x bg-white mt-4 text-sm text-gray-700"
          aria-label="Pagination"
        >
          <button className="px-3 py-2 focus:outline-none">Prev</button>
          <button className="px-4 py-2 focus:outline-none">2</button>
          <button className="px-4 py-2 focus:outline-none text-white bg-indigo-600">3</button>
          <button className="px-4 py-2 focus:outline-none">4</button>
          <button className="px-3 py-2 focus:outline-none">Next</button>
        </nav>
      </div>
    </div>
  );
}

export default Servers;
