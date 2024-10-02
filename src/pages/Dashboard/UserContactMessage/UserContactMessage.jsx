import axios from "axios";
import { useEffect, useState } from "react";

const UserContactMessage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCitizenReports = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://city-corporation-backend.onrender.com/contact/get/`
        );
        console.log(response);
        if (response.status == 200) {
          setContacts(response.data);
          console.log(response.data);
        }
      } catch (error) {
        alert("something went wrong", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchCitizenReports();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-red-600"></span>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold text-center my-6">
            All Contact
          </h1>
          {contacts.length > 0 ? (
            <div className="overflow-x-auto">
              <div className="min-w-full inline-block align-middle">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-2">#</th>
                      <th className="text-left px-4 py-2">First Name</th>
                      <th className="text-left px-4 py-2">Last Name</th>
                      <th className="text-left px-4 py-2">Email</th>
                      <th className="text-left px-4 py-2">Message</th>
                      <th className="text-left px-4 py-2">Sent at</th>
                      <th className="text-left px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((report, index) => (
                      <tr key={report.id}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">
                          {report.first_name}
                        </td>
                        <td className="border px-4 py-2">{report.last_name}</td>
                        <td className="border px-4 py-2">{report.email}</td>
                        <td className="border px-4 py-2">{report.message}</td>
                        <td className="border px-4 py-2">
                          {new Date(report.sent_at).toLocaleDateString()}
                        </td>
                        <td className="border px-4 py-2">
                          <a
                            href={`mailto:${report.email}?subject=Response to your message&body=Hello ${report.first_name},`}
                            className="btn btn-sm btn-secondary"
                          >
                            Send Email
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">No message found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserContactMessage;
