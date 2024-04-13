import { leads } from "@/lib/dummy-data";
import moment from "moment";

const WorkTable = () => {
  return (
    <>
      <div className="overflow-x-auto w-full mt-8">
        <table className="table w-full">
          <thead className="bg-slate-100 border-b border-neutral-200">
            <tr>
              <th>DONOR</th>
              <th>PANELS</th>
              <th>BARCODE</th>
              <th>SOURCE</th>
              <th>DATE</th>
              <th>AMOUNT($)</th>
              <th>OBSERVED BY</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l, k) => {
              return (
                <tr key={k} className="border-b border-neutral-200">
                  <td className="p-8 ">
                    <div className="flex items-center justify-center">
                      <div className="font-bold text-green-500">{l.donor}</div>
                    </div>
                  </td>
                  <div className="flex items-center justify-center mt-6 font-bold">
                    <td>{l.panels}</td>
                  </div>
                  
                  <td>{l.barcode}</td>
                  <td>{l.source}</td>
                  <td>
                    {moment(new Date())
                      .add(-5 * (k + 2), "days")
                      .format("MM/DD/YY")}
                  </td>
                  <td>{l.amount}</td>
                  <td>{l.observed_by}</td>
                  <td>{l.status}</td>
                  {/* <td><button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(k)}><TrashIcon className="w-5"/></button></td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WorkTable;
