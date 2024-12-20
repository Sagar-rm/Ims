'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { FiHome, FiUsers, FiBriefcase, FiCalendar, FiSettings, FiPieChart, FiTrendingUp, FiCheckCircle, FiAlertCircle, FiSearch, FiBook, FiClock, FiAward, FiFileText, FiBell, FiMail, FiLogOut, FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi'
import { Bar, Pie, Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement)

const AnimatedButton = motion(Button)

export default function EnhancedAnimatedAdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')
  const [isNotificationsPanelOpen, setIsNotificationsPanelOpen] = useState(false)
  const [selectedBatch, setSelectedBatch] = useState('all')

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
    { icon: FiUsers, label: 'Total Students', value: '1,234', color: 'bg-violet-600' },
    { icon: FiBriefcase, label: 'Partner Companies', value: '56', color: 'bg-pink-500' },
    { icon: FiCalendar, label: 'Active Programs', value: '23', color: 'bg-cyan-400' },
    { icon: FiTrendingUp, label: 'Placement Rate', value: '92%', color: 'bg-amber-400' },
  ]

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Students Enrolled',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(124, 58, 237, 0.5)',
      },
    ],
  }

  const pieChartData = {
    labels: ['Tech', 'Marketing', 'Design', 'HR'],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: [
          'rgba(124, 58, 237, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(34, 211, 238, 0.8)',
          'rgba(251, 191, 36, 0.8)',
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
        borderColor: 'rgb(124, 58, 237)',
        tension: 0.1,
      },
    ],
  }

  const recentActivities = [
    { icon: FiCheckCircle, text: 'New student enrolled: Jane Smith', time: '2 hours ago' },
    { icon: FiBriefcase, text: 'New company partnership: Tech Innovators', time: '1 day ago' },
    { icon: FiAlertCircle, text: 'Exam results published for "Web Development 101"', time: '2 days ago' },
    { icon: FiClock, text: 'Attendance report generated for June 2023', time: '3 days ago' },
  ]

  const studentList = [
    { id: 1, name: 'John Doe', course: 'Web Development', batch: 'Batch 2023A', attendance: '95%', performance: 'Excellent' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', batch: 'Batch 2023B', attendance: '88%', performance: 'Good' },
    { id: 3, name: 'Mike Johnson', course: 'UI/UX Design', batch: 'Batch 2023A', attendance: '92%', performance: 'Very Good' },
    { id: 4, name: 'Emily Brown', course: 'Digital Marketing', batch: 'Batch 2023C', attendance: '85%', performance: 'Good' },
  ]

  const notifications = [
    { id: 1, title: 'New Student Registration', message: 'A new student has registered for the Web Development course.', time: '5 minutes ago' },
    { id: 2, title: 'Exam Results Updated', message: 'The results for the recent Data Science exam have been uploaded.', time: '1 hour ago' },
    { id: 3, title: 'Company Partnership', message: 'A new company has joined our internship program.', time: '2 hours ago' },
  ]

  const renderDashboard = () => (
    <LayoutGroup>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              layout
              className={`p-4 rounded-lg shadow-md ${stat.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-white mr-4">
                  <stat.icon className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <p className="text-white opacity-75">{stat.label}</p>
                  <motion.p
                    className="text-2xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          <motion.div
            layout
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Student Enrollment Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <Bar data={barChartData} options={{ responsive: true }} />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            layout
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Program Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <Pie data={pieChartData} options={{ responsive: true }} />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          layout
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <activity.icon className="w-5 h-5 mr-3 text-green-500" />
                    <div>
                      <p>{activity.text}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          layout
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {['Add New Student', 'Create Program', 'Schedule Exam', 'Generate Report'].map((action, index) => (
                  <motion.div
                    key={action}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <AnimatedButton
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 8px rgb(124, 58, 237)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiPlus className="mr-2 h-4 w-4" /> {action}
                    </AnimatedButton>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  )

  const renderStudents = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Student Management</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            className="flex justify-between items-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
              <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Batches</SelectItem>
                  <SelectItem value="2023A">Batch 2023A</SelectItem>
                  <SelectItem value="2023B">Batch 2023B</SelectItem>
                  <SelectItem value="2023C">Batch 2023C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <AnimatedButton
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgb(124, 58, 237)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPlus className="mr-2 h-4 w-4" /> Add Student
                </AnimatedButton>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Student</DialogTitle>
                  <DialogDescription>
                    Enter the details of the new student below.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="course" className="text-right">
                      Course
                    </Label>
                    <Input id="course" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="batch" className="text-right">
                      Batch
                    </Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select batch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023A">Batch 2023A</SelectItem>
                        <SelectItem value="2023B">Batch 2023B</SelectItem>
                        <SelectItem value="2023C">Batch 2023C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <AnimatedButton
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 8px rgb(124, 58, 237)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add Student
                  </AnimatedButton>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {studentList
                  .filter(student => 
                    (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    student.course.toLowerCase().includes(searchTerm.toLowerCase())) &&
                    (selectedBatch === 'all' || student.batch.includes(selectedBatch))
                  )
                  .map((student, index) => (
                  <motion.tr
                    key={student.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.course}</TableCell>
                    <TableCell>{student.batch}</TableCell>
                    <TableCell>{student.attendance}</TableCell>
                    <TableCell>
                      <Badge variant={student.performance === 'Excellent' ? 'default' : 'secondary'}>
                        {student.performance}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <AnimatedButton
                        variant="ghost"
                        size="sm"
                        className="mr-2"
                        whileHover={{
                          scale: 1.1,
                          color: "rgb(124, 58, 237)",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiEdit className="h-4 w-4" />
                      </AnimatedButton>
                      <AnimatedButton
                        variant="ghost"
                        size="sm"
                        whileHover={{
                          scale: 1.1,
                          color: "rgb(239, 68, 68)",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </AnimatedButton>
                    </TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )

  const renderAttendance = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Attendance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Line data={lineChartData} options={{ responsive: true }} />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>High Attendance Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>Web Development (98%)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>Data Science (95%)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>UI/UX Design (93%)</motion.li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Low Attendance Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>Digital Marketing (82%)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>Business Analytics (85%)</motion.li>
                  <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>Project Management (87%)</motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )

  const renderExams = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Exam Management</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            className="mb-4 flex justify-between items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Input
              type="text"
              placeholder="Search exams..."
              className="max-w-sm"
            />
            <Dialog>
              <DialogTrigger asChild>
                <AnimatedButton
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgb(124, 58, 237)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPlus className="mr-2 h-4 w-4" /> Schedule New Exam
                </AnimatedButton>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule New Exam</DialogTitle>
                  <DialogDescription>
                    Enter the details of the new exam below.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="examName" className="text-right">
                      Exam Name
                    </Label>
                    <Input id="examName" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="course" className="text-right">
                      Course
                    </Label>
                    <Input id="course" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">
                      Date
                    </Label>
                    <Input id="date" type="date" className="col-span-3" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <AnimatedButton
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 8px rgb(124, 58, 237)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Exam
                  </AnimatedButton>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Exam Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {[
                  { id: 1, name: 'Midterm Exam', course: 'Web Development', date: '2023-07-15', status: 'Completed' },
                  { id: 2, name: 'Final Project', course: 'Data Science', date: '2023-08-20', status: 'Upcoming' },
                ].map((exam, index) => (
                  <motion.tr
                    key={exam.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <TableCell className="font-medium">{exam.name}</TableCell>
                    <TableCell>{exam.course}</TableCell>
                    <TableCell>{exam.date}</TableCell>
                    <TableCell>
                      <Badge variant={exam.status === 'Completed' ? 'default' : 'secondary'}>
                        {exam.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <AnimatedButton
                        variant="ghost"
                        size="sm"
                        className="mr-2"
                        whileHover={{
                          scale: 1.1,
                          color: "rgb(124, 58, 237)",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {exam.status === 'Completed' ? 'View Results' : 'Edit'}
                      </AnimatedButton>
                      <AnimatedButton
                        variant="ghost"
                        size="sm"
                        whileHover={{
                          scale: 1.1,
                          color: "rgb(239, 68, 68)",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {exam.status === 'Completed' ? 'Delete' : 'Cancel'}
                      </AnimatedButton>
                    </TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <motion.aside
        className="w-64 bg-card shadow-md"
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">IMS Admin</h1>
        </div>
        <nav className="mt-4">
          {sidebarItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <AnimatedButton
                variant="ghost"
                className={`flex items-center w-full justify-start px-4 py-2 ${
                  activeTab === item.id ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
                onClick={() => setActiveTab(item.id)}
                whileHover={{
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  color: "rgb(124, 58, 237)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="mr-3" />
                {item.label}
              </AnimatedButton>
            </motion.div>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <motion.div
          className="mb-8 flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Welcome, Admin</h1>
          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Search..."
              className="max-w-xs"
            />
            <AnimatedButton
              variant="outline"
              size="icon"
              onClick={() => setIsNotificationsPanelOpen(!isNotificationsPanelOpen)}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(124, 58, 237, 0.1)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FiBell className="h-4 w-4" />
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              size="icon"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(124, 58, 237, 0.1)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail className="h-4 w-4" />
            </AnimatedButton>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="exams">Exams</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <TabsContent value="dashboard">{renderDashboard()}</TabsContent>
            <TabsContent value="students">{renderStudents()}</TabsContent>
            <TabsContent value="attendance">{renderAttendance()}</TabsContent>
            <TabsContent value="exams">{renderExams()}</TabsContent>
          </AnimatePresence>
        </Tabs>
      </main>

      {/* Notifications Panel */}
      <AnimatePresence>
        {isNotificationsPanelOpen && (
          <motion.div
            className="fixed right-0 top-0 h-full w-80 bg-background shadow-lg p-4 overflow-y-auto"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                className="bg-card p-3 rounded-lg mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="font-semibold">{notification.title}</h3>
                <p className="text-sm text-muted-foreground">{notification.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}



