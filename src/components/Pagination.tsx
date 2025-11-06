import React, { useEffect, useState } from "react";

const Pagination = () => {
  const users = [
    {
      id: 1,
      name: "Aarav Kumar",
      email: "aarav.kumar@example.com",
      age: 24,
      city: "Chennai",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      age: 28,
      city: "Bangalore",
    },
    {
      id: 3,
      name: "Rahul Verma",
      email: "rahul.verma@example.com",
      age: 30,
      city: "Mumbai",
    },
    {
      id: 4,
      name: "Sneha Patel",
      email: "sneha.patel@example.com",
      age: 22,
      city: "Hyderabad",
    },
    {
      id: 5,
      name: "Karthik Reddy",
      email: "karthik.reddy@example.com",
      age: 26,
      city: "Delhi",
    },
    {
      id: 6,
      name: "Divya Iyer",
      email: "divya.iyer@example.com",
      age: 27,
      city: "Pune",
    },
    {
      id: 7,
      name: "Vikram Nair",
      email: "vikram.nair@example.com",
      age: 29,
      city: "Chennai",
    },
    {
      id: 8,
      name: "Aditi Singh",
      email: "aditi.singh@example.com",
      age: 25,
      city: "Kolkata",
    },
    {
      id: 9,
      name: "Rohan Das",
      email: "rohan.das@example.com",
      age: 23,
      city: "Chandigarh",
    },
    {
      id: 10,
      name: "Neha Joshi",
      email: "neha.joshi@example.com",
      age: 31,
      city: "Bhopal",
    },
    {
      id: 11,
      name: "Sanjay Mehta",
      email: "sanjay.mehta@example.com",
      age: 32,
      city: "Indore",
    },
    {
      id: 12,
      name: "Kavya Menon",
      email: "kavya.menon@example.com",
      age: 24,
      city: "Trivandrum",
    },
    {
      id: 13,
      name: "Harish Gupta",
      email: "harish.gupta@example.com",
      age: 28,
      city: "Delhi",
    },
    {
      id: 14,
      name: "Ananya Rao",
      email: "ananya.rao@example.com",
      age: 26,
      city: "Bangalore",
    },
    {
      id: 15,
      name: "Deepak Jain",
      email: "deepak.jain@example.com",
      age: 27,
      city: "Jaipur",
    },
    {
      id: 16,
      name: "Ritika Roy",
      email: "ritika.roy@example.com",
      age: 25,
      city: "Kolkata",
    },
    {
      id: 17,
      name: "Abhinav Mishra",
      email: "abhinav.mishra@example.com",
      age: 30,
      city: "Lucknow",
    },
    {
      id: 18,
      name: "Simran Kaur",
      email: "simran.kaur@example.com",
      age: 22,
      city: "Amritsar",
    },
    {
      id: 19,
      name: "Manoj Bhat",
      email: "manoj.bhat@example.com",
      age: 33,
      city: "Mysore",
    },
    {
      id: 20,
      name: "Tanya Dey",
      email: "tanya.dey@example.com",
      age: 24,
      city: "Kolkata",
    },
    {
      id: 21,
      name: "Vikas Shetty",
      email: "vikas.shetty@example.com",
      age: 29,
      city: "Mangalore",
    },
    {
      id: 22,
      name: "Meera Ghosh",
      email: "meera.ghosh@example.com",
      age: 27,
      city: "Ranchi",
    },
    {
      id: 23,
      name: "Ravi Chauhan",
      email: "ravi.chauhan@example.com",
      age: 31,
      city: "Delhi",
    },
    {
      id: 24,
      name: "Pooja Pillai",
      email: "pooja.pillai@example.com",
      age: 26,
      city: "Kochi",
    },
    {
      id: 25,
      name: "Nitin Malhotra",
      email: "nitin.malhotra@example.com",
      age: 28,
      city: "Agra",
    },
    {
      id: 26,
      name: "Shruti Desai",
      email: "shruti.desai@example.com",
      age: 25,
      city: "Surat",
    },
    {
      id: 27,
      name: "Suresh Kumar",
      email: "suresh.kumar@example.com",
      age: 34,
      city: "Chennai",
    },
    {
      id: 28,
      name: "Preeti Rani",
      email: "preeti.rani@example.com",
      age: 24,
      city: "Delhi",
    },
    {
      id: 29,
      name: "Arjun Das",
      email: "arjun.das@example.com",
      age: 30,
      city: "Guwahati",
    },
    {
      id: 30,
      name: "Ishita Mehra",
      email: "ishita.mehra@example.com",
      age: 26,
      city: "Noida",
    },
    {
      id: 31,
      name: "Mohit Bansal",
      email: "mohit.bansal@example.com",
      age: 29,
      city: "Delhi",
    },
    {
      id: 32,
      name: "Anjali Kapoor",
      email: "anjali.kapoor@example.com",
      age: 28,
      city: "Gurgaon",
    },
    {
      id: 33,
      name: "Rajesh Sinha",
      email: "rajesh.sinha@example.com",
      age: 31,
      city: "Patna",
    },
    {
      id: 34,
      name: "Bhavna Pandey",
      email: "bhavna.pandey@example.com",
      age: 27,
      city: "Kanpur",
    },
    {
      id: 35,
      name: "Amit Thakur",
      email: "amit.thakur@example.com",
      age: 33,
      city: "Shimla",
    },
    {
      id: 36,
      name: "Lavanya Reddy",
      email: "lavanya.reddy@example.com",
      age: 25,
      city: "Hyderabad",
    },
    {
      id: 37,
      name: "Kiran Raj",
      email: "kiran.raj@example.com",
      age: 26,
      city: "Chennai",
    },
    {
      id: 38,
      name: "Roshni Jain",
      email: "roshni.jain@example.com",
      age: 28,
      city: "Surat",
    },
    {
      id: 39,
      name: "Tarun Paul",
      email: "tarun.paul@example.com",
      age: 29,
      city: "Kolkata",
    },
    {
      id: 40,
      name: "Saira Khan",
      email: "saira.khan@example.com",
      age: 24,
      city: "Delhi",
    },
    {
      id: 41,
      name: "Ajay Patel",
      email: "ajay.patel@example.com",
      age: 31,
      city: "Ahmedabad",
    },
    {
      id: 42,
      name: "Geeta Nair",
      email: "geeta.nair@example.com",
      age: 27,
      city: "Kochi",
    },
    {
      id: 43,
      name: "Lokesh Sharma",
      email: "lokesh.sharma@example.com",
      age: 29,
      city: "Jaipur",
    },
    {
      id: 44,
      name: "Swati Bhatia",
      email: "swati.bhatia@example.com",
      age: 26,
      city: "Delhi",
    },
    {
      id: 45,
      name: "Vimal Dutta",
      email: "vimal.dutta@example.com",
      age: 30,
      city: "Dehradun",
    },
    {
      id: 46,
      name: "Chitra Singh",
      email: "chitra.singh@example.com",
      age: 25,
      city: "Bangalore",
    },
    {
      id: 47,
      name: "Aditya Joshi",
      email: "aditya.joshi@example.com",
      age: 32,
      city: "Mumbai",
    },
    {
      id: 48,
      name: "Jyothi Menon",
      email: "jyothi.menon@example.com",
      age: 27,
      city: "Kochi",
    },
    {
      id: 49,
      name: "Ritesh Gupta",
      email: "ritesh.gupta@example.com",
      age: 28,
      city: "Delhi",
    },
    {
      id: 50,
      name: "Kavitha Rao",
      email: "kavitha.rao@example.com",
      age: 26,
      city: "Hyderabad",
    },
    {
      id: 51,
      name: "Santosh Pillai",
      email: "santosh.pillai@example.com",
      age: 34,
      city: "Pune",
    },
    {
      id: 52,
      name: "Renu Deshmukh",
      email: "renu.deshmukh@example.com",
      age: 25,
      city: "Nagpur",
    },
    {
      id: 53,
      name: "Mithun Reddy",
      email: "mithun.reddy@example.com",
      age: 27,
      city: "Hyderabad",
    },
    {
      id: 54,
      name: "Rachita Das",
      email: "rachita.das@example.com",
      age: 28,
      city: "Kolkata",
    },
    {
      id: 55,
      name: "Pradeep Sharma",
      email: "pradeep.sharma@example.com",
      age: 33,
      city: "Delhi",
    },
    {
      id: 56,
      name: "Isha Verma",
      email: "isha.verma@example.com",
      age: 24,
      city: "Mumbai",
    },
    {
      id: 57,
      name: "Aniket Bhat",
      email: "aniket.bhat@example.com",
      age: 26,
      city: "Mysore",
    },
    {
      id: 58,
      name: "Tanuja Ghosh",
      email: "tanuja.ghosh@example.com",
      age: 27,
      city: "Kolkata",
    },
    {
      id: 59,
      name: "Devraj Singh",
      email: "devraj.singh@example.com",
      age: 30,
      city: "Delhi",
    },
    {
      id: 60,
      name: "Nisha Chawla",
      email: "nisha.chawla@example.com",
      age: 25,
      city: "Chandigarh",
    },
    {
      id: 61,
      name: "Manish Patel",
      email: "manish.patel@example.com",
      age: 28,
      city: "Surat",
    },
    {
      id: 62,
      name: "Parul Mehra",
      email: "parul.mehra@example.com",
      age: 26,
      city: "Delhi",
    },
    {
      id: 63,
      name: "Roshan Reddy",
      email: "roshan.reddy@example.com",
      age: 27,
      city: "Hyderabad",
    },
    {
      id: 64,
      name: "Meenal Jain",
      email: "meenal.jain@example.com",
      age: 29,
      city: "Bhopal",
    },
    {
      id: 65,
      name: "Abhishek Dubey",
      email: "abhishek.dubey@example.com",
      age: 30,
      city: "Kanpur",
    },
    {
      id: 66,
      name: "Vidya Rao",
      email: "vidya.rao@example.com",
      age: 25,
      city: "Chennai",
    },
    {
      id: 67,
      name: "Suraj Gupta",
      email: "suraj.gupta@example.com",
      age: 32,
      city: "Delhi",
    },
    {
      id: 68,
      name: "Radhika Nair",
      email: "radhika.nair@example.com",
      age: 28,
      city: "Kochi",
    },
    {
      id: 69,
      name: "Anand Singh",
      email: "anand.singh@example.com",
      age: 27,
      city: "Lucknow",
    },
    {
      id: 70,
      name: "Maya Pillai",
      email: "maya.pillai@example.com",
      age: 26,
      city: "Kochi",
    },
    {
      id: 71,
      name: "Raj Malhotra",
      email: "raj.malhotra@example.com",
      age: 33,
      city: "Delhi",
    },
    {
      id: 72,
      name: "Sangeeta Iyer",
      email: "sangeeta.iyer@example.com",
      age: 29,
      city: "Chennai",
    },
    {
      id: 73,
      name: "Vinod Rao",
      email: "vinod.rao@example.com",
      age: 30,
      city: "Bangalore",
    },
    {
      id: 74,
      name: "Akansha Patel",
      email: "akansha.patel@example.com",
      age: 25,
      city: "Ahmedabad",
    },
    {
      id: 75,
      name: "Kishore Reddy",
      email: "kishore.reddy@example.com",
      age: 31,
      city: "Hyderabad",
    },
  ];
const [data, setData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataPerPage] = useState<number>(10);
  const [pageData, setPageData] = useState<any[]>([]);

  // ✅ Calculate total pages & slice current page data
  const calculatePagination = () => {
    const count = Math.ceil(data.length / dataPerPage);
    setTotalPages(count);

    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = startIndex + dataPerPage;
    const vals = data.slice(startIndex, endIndex);
    setPageData(vals);
  };

  // 🧠 Update data when user array is loaded
  useEffect(() => {
    setTimeout(() => {
      setData(users);
    }, 1000);
  }, []);

  // 🔄 Recalculate when data or current page changes
  useEffect(() => {
    if (data.length > 0) {
      calculatePagination();
    }
  }, [data, currentPage]);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">User Pagination (75 users)</h1>

      {pageData.length > 0 ? (
        <>
          {/* Display users */}
          {pageData.map((user, index) => (
            <div key={index} className="border p-3 mb-2 rounded-md shadow-sm">
              <p>
                <strong>{user.id}. {user.name}</strong>
              </p>
              <p>Email: {user.email}</p>
              <p>City: {user.city}</p>
              <p>Age: {user.age}</p>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() =>
                setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
              }
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  prev < totalPages ? prev + 1 : prev
                )
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Pagination;