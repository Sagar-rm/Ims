import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FiHome, FiUsers, FiBriefcase, FiCalendar, FiSettings, FiPieChart, FiTrendingUp, FiCheckCircle, FiAlertCircle, FiSearch, FiBook, FiClock, FiAward, FiFileText } from 'react-icons/fi'
import { Bar, Pie, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
)

const barChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Students Enrolled',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(124, 58, 237, 0.5)', // violet-600
    },
  ],
}

const pieChartData = {
  labels: ['Tech', 'Marketing', 'Design', 'HR'],
  datasets: [
    {
      data: [30, 25, 20, 25],
      backgroundColor: [
        'rgba(124, 58, 237, 0.8)', // violet-600
        'rgba(236, 72, 153, 0.8)', // pink-500
        'rgba(34, 211, 238, 0.8)', // cyan-400
        'rgba(251, 191, 36, 0.8)', // amber-400
      ],
    },
  ],
}

const lineChartData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
  datasets: [
    {
      label: 'Average Attendance',
      data: [85, 88, 92, 90, 94, 96],
      borderColor: 'rgb(124, 58, 237)', // violet-600
      tension: 0.1,
    },
  ],
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')

  const sidebarItems = [
    { icon: FiHome, label: 'Dashboard', id: 'dashboard' },
    { icon: FiUsers, label: 'Students', id: 'students' },
    { icon: FiBriefcase, label: 'Companies', id: 'companies' },
    { icon: FiCalendar, label: 'Programs', id: 'programs' },
    { icon: FiBook, label: 'Courses', id: 'courses' },
    { icon: FiClock, label: 'Attendance', id: 'attendance' },
    { icon: FiAward, label: 'Exams', id: 'exams' },
    { icon: FiFileText, label: 'Reports', id: 'reports' },
    { icon: FiSettings, label: 'Settings', id: 'settings' },
  ]

  const quickStats = [
    { icon: FiUsers, label: 'Total Students', value: '1,234', color: 'bg-blue-500' },
    { icon: FiBriefcase, label: 'Partner Companies', value: '56', color: 'bg-green-500' },
    { icon: FiCalendar, label: 'Active Programs', value: '23', color: 'bg-yellow-500' },
    { icon: FiTrendingUp, label: 'Placement Rate', value: '92%', color: 'bg-purple-500' },
  ]

  const recentActivities = [
    { icon: FiCheckCircle, text: 'New student enrolled: Jane Smith', time: '2 hours ago' },
    { icon: FiBriefcase, text: 'New company partnership: Tech Innovators', time: '1 day ago' },
    { icon: FiAlertCircle, text: 'Exam results published for "Web Development 101"', time: '2 days ago' },
    { icon: FiClock, text: 'Attendance report generated for June 2023', time: '3 days ago' },
  ]

  const studentList = [
    { id: 1, name: 'John Doe', course: 'Web Development', attendance: '95%', performance: 'Excellent' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', attendance: '88%', performance: 'Good' },
    { id: 3, name: 'Mike Johnson', course: 'UI/UX Design', attendance: '92%', performance: 'Very Good' },
    { id: 4, name: 'Emily Brown', course: 'Digital Marketing', attendance: '85%', performance: 'Good' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'students':
        return renderStudents()
      case 'attendance':
        return renderAttendance()
      case 'exams':
        return renderExams()
      default:
        return <div>Content for {activeTab}</div>
    }
  }

  const renderDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickStats.map((stat, index) => (
          <Card key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.color} text-white mr-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-white mb-4">Student Enrollment Trend</h2>
          <Bar data={barChartData} options={{ responsive: true }} />
        </Card>
        <Card className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-white mb-4">Program Distribution</h2>
          <Pie data={pieChartData} options={{ responsive: true }} />
        </Card>
      </div>

      <Card className="p-4 bg-gray-800 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <activity.icon className="w-5 h-5 mr-3 text-green-500" />
              <div>
                <p className="text-white">{activity.text}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
            Add New Student
          </button>
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
            Create Program
          </button>
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
            Schedule Exam
          </button>
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
            Generate Report
          </button>
        </div>
      </Card>
    </>
  )

  const renderStudents = () => (
    <Card className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Student Management</h2>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2 text-left text-white">ID</th>
            <th className="p-2 text-left text-white">Name</th>
            <th className="p-2 text-left text-white">Course</th>
            <th className="p-2 text-left text-white">Attendance</th>
            <th className="p-2 text-left text-white">Performance</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => (
            <tr key={student.id} className="border-b">
              <td className="p-2 text-white">{student.id}</td>
              <td className="p-2 text-white">{student.name}</td>
              <td className="p-2 text-white">{student.course}</td>
              <td className="p-2 text-white">{student.attendance}</td>
              <td className="p-2 text-white">{student.performance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )

  const renderAttendance = () => (
    <Card className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Attendance Overview</h2>
      <div className="mb-8">
        <Line data={lineChartData} options={{ responsive: true }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">High Attendance Courses</h3>
          <ul className="list-disc list-inside">
            <li>Web Development (98%)</li>
            <li>Data Science (95%)</li>
            <li>UI/UX Design (93%)</li>
          </ul>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Low Attendance Courses</h3>
          <ul className="list-disc list-inside">
            <li>Digital Marketing (82%)</li>
            <li>Business Analytics (85%)</li>
            <li>Project Management (87%)</li>
          </ul>
        </div>
      </div>
    </Card>
  )

  const renderExams = () => (
    <Card className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Exam Management</h2>
      <div className="mb-4 flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search exams..."
          className="max-w-xs bg-gray-800 text-white border rounded-full border-gray-700"
        />
        <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
          Schedule New Exam
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2 text-left text-white">Exam Name</th>
            <th className="p-2 text-left text-white">Course</th>
            <th className="p-2 text-left text-white">Date</th>
            <th className="p-2 text-left text-white">Status</th>
            <th className="p-2 text-left text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2 text-white">Midterm Exam</td>
            <td className="p-2 text-white">Web Development</td>
            <td className="p-2 text-white">2023-07-15</td>
            <td className="p-2 text-white"><span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-sm">Completed</span></td>
            <td className="p-2 text-white">
              <button className="text-blue-500 hover:underline mr-2">View Results</button>
              <button className="text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-2 text-white">Final Project</td>
            <td className="p-2 text-white">Data Science</td>
            <td className="p-2 text-white">2023-08-20</td>
            <td className="p-2 text-white"><span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-sm">Upcoming</span></td>
            <td className="p-2 text-white">
              <button className="text-blue-500 hover:underline mr-2">Edit</button>
              <button className="text-red-500 hover:underline">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  )

  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-white">IMS Admin</h1>
        </div>
        <nav className="mt-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center w-full px-4 py-2 text-left ${
                activeTab === item.id ? 'bg-violet-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto bg-gray-900">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Welcome, Admin</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-full bg-gray-800 text-white border-gray-700"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        {renderContent()}
      </main>
    </div>
  )
}