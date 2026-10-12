# Proposed Curriculum Subjects Justification

Why each course in `Physical AI Curriculum.md` is on the plan. The degree is a B.S. in Artificial Intelligence and Autonomous Systems. Hiring is machine learning, deep learning, and computer vision. Robotics and autonomous intelligence run through every year. An aircraft is one machine inside those courses. Credit numbers in the curriculum are temporary.

A course is justified if dropping it leaves a later course, a project, or a stated hiring role without the knowledge it needs.

---

## Semester 1

### Calculus

Rates of change and integration are the language of motion, of a loss function, and of a differential equation. Physics of Motion in the same semester uses this language as the weeks proceed. Differential Equations in Semester 3 is written in it.

### Linear Algebra

Matrices and vector spaces are the shared tool of a learning model, a camera, and a robot’s position. Machine learning, computer vision, and robot mechanics all assume them. Folding them into calculus would leave both subjects thin.

### Python Programming

Python is the language of the learning courses and the projects. It has to come before Introduction to Machine Learning and before Object-Oriented Programming. A learner who meets Python first inside a machine-learning course is late.

### Physics of Motion

A robot and an aircraft are bodies that move. This course starts from vectors and Newton’s laws. Robot Mechanics, control, and dynamics all sit on it. Without it, later motion courses would have to teach Newton’s laws inside a robotics course.

### AI and Robotics

This is the first statement of the degree’s loop: perceive, decide, act. It names the machines the later courses use: a robot arm, a mobile robot, and an aircraft. Without an early course, robotics would appear only after the mathematics.

### Ethics and Technical Communication

The machine-learning project and Autonomy Project II are presented live. Communication is practised from the first semester, not only in a final portfolio.

---

## Semester 2

### Probability and Statistics

A model is judged under uncertainty. Introduction to Machine Learning, Sensor Data Fusion, and any claim about where a model fails all need this. It sits in the same semester as the first learning course so that course can use it as the weeks proceed.

### Data for Machine Learning

A hiring project needs a table a model can train on. SQL is inside this course so a separate database course is not required, and so the first learning course is not also a data-engineering course. Without it, learners train only on files they cannot query.

### Introduction to Machine Learning

The foundation exit includes a first learning course, not only mathematics and Python. Machine Learning in Semester 3 then has somewhere to go deeper. Waiting until year 2 for any learning course would make the first year a mathematics year.

### Algorithms

Learning code and robot software both depend on choosing a method and knowing what it costs. This course is the algorithms course. It is not a second Python course. Without it, later courses hide that choice inside library calls.

### Sensors and Actuators

The perceive–act loop needs a distinction between what a model can observe and what an actuator can be told to do. Sensor Data Fusion, control, and computer vision all use that distinction. The course does not claim the learner wired a circuit.

### Object-Oriented Programming

Python Programming is the first language course. This is the course where classes and objects are practised, which robot software and a learning codebase both use. Placing it after Python, and before Software Engineering, keeps each course to one job.

---

## Semester 3

### Machine Learning

This is the classical machine-learning course, after the introduction. Deep Learning, the machine-learning project, and the hiring claim all depend on it being a full course. The introduction in Semester 2 is not a substitute.

### Optimisation

Training a model and tuning a controller are both optimisation. The course sits beside Machine Learning so gradient methods are a subject, not a paragraph inside one algorithm. Deep Learning in the next semester assumes it.

### Signals and Systems

Sampling and linear systems are shared by vision, fusion, and control. Sensor Data Fusion and Real-Time Systems need a learner who has already met a signal. Without it, a Kalman filter is only a matrix formula.

### Robot Mechanics

This is position and velocity of a robot, after Physics of Motion and before control. Dynamics in Semester 5 is the later rigid-body course. Splitting them keeps Semester 3 to kinematics, which a controller on a simple plant can use before the full dynamic model exists.

### Differential Equations

Applied Control Systems in Semester 4 is written in differential equations. Teaching the equations in the same semester as the controller would leave the learner meeting the mathematics and the method together. This course is the semester before.

### Applied Machine Learning

Machine Learning states the methods. This course builds one full model with them, in the same semester, week by week. It is the bridge to the individual project in Semester 4. A methods course with no applied course leaves the project as the first time a learner finishes a model.

---

## Semester 4

### Deep Learning

Neural models are the hiring core after classical machine learning. Computer vision, generative models, reinforcement learning, and Perception to Action all assume them. Ending the learning sequence at classical machine learning would not support the stated roles.

### Model Building and Evaluation

A hiring conversation asks where a model fails, not only whether it trained. This course is that measurement, beside Deep Learning and before the machine-learning project is presented. Without it, the project can show a score and not a limit.

### Software Engineering

The machine-learning project is the first large piece of software, and it is presented live. This course sits in the same semester so the project is built as something another person can run. Leaving software engineering until after that project makes the diploma evidence a notebook only.

### Applied Control Systems

A learned model does not move a machine. This course is feedback on a simple plant, after differential equations and robot mechanics, and before the full rigid-body dynamics. Guidance, swarms, and the autonomy project assume a learner who has closed a loop.

### Simulation of Robotic Systems

There is no required laboratory. This simulator is where the machines run. It also exports a labelled synthetic set that later vision and the autonomy project use. An aircraft may be one machine in the twin as a supplied model. Its lift, drag, and force and moment equations are taught in the next semester, not here.

### Machine Learning Project

This is the diploma’s hiring evidence: one individual model, presented live, built beside Software Engineering. The diploma exit needs this project before the two year-3 projects. Without it, the first finished work a learner can show is in year 3.

---

## Semester 5

### Computer Vision

Detection and a camera model are the third hiring subject, after machine learning and deep learning. The course uses a webcam or a phone camera, including calibration on that camera. Computer Vision and 3D Data, the vision project, guidance, and Perception to Action all sit on it.

### Linux and Systems Programming

Robot Software in Semester 7 includes a flight stack when the machine is an aircraft, in simulation. That software is read from a command line, and some of it is C. This course is that preparation. Python alone does not read that stack.

### Dynamics of Autonomous Machines

Robot Mechanics stopped at position and velocity. This course is the rigid body: an arm, and one aerial machine with lift, drag, and the force and moment equations. Control in Semester 4 used a simple plant on purpose. Guidance and the autonomy project need this model before a route is meaningful.

### Real-Time Systems

A command that arrives late is a different command. This course is software and timing in a simulator, beside Linux, and before Efficient AI Software asks for a latency budget. It does not claim the learner flashed a board.

### Human-Machine Interaction

An autonomous machine is directed and stopped by a person. This is that course. Airspace rules are one case inside it, because an aircraft is one machine, not a second degree. The career line about directing and stopping a robot depends on this course. It is not a design degree.

### Vision Studio

Computer Vision is the methods. The studio is the practice on the learner’s camera, in the same semester, before the vision project. A single project at the end of Semester 6 is a weak way to learn a camera.

---

## Semester 6

### Computer Vision and 3D Data

Detection in Semester 5 is not geometry in space. Guidance, SLAM, and a moving machine need a second vision course for 3D. Perception to Action follows these vision courses when it turns an image into a command.

### Natural Language and Generative AI

Language models are part of the hiring set, and one unit makes synthetic images for a detector. The detector already exists from Computer Vision, so the unit has a model to train. The curriculum keeps both in this one course. Dropping the course would drop both.

### Automation of Intelligent Machines

The robotics courses up to here teach single machines and a controller. This course uses a robot as the main machine and an aircraft as one more. It is the bridge from a single-machine model to the swarm and the mission.

### Sensor Data Fusion

Sensor readings are not one measurement. This course combines them, including a Kalman filter on logged motion, after probability, signals, vision, and dynamics. Guidance and SLAM in Semester 7 assume the filter. Without it, navigation starts from raw sensors.

### Computer Vision Project

This is the vision evidence an employer can run, after the vision course, the studio, and the 3D course. The machine-learning project does not show detection. This one does.

### Applied Intelligence Project

The hiring year needs a second finished piece of work that is not only vision: a model in a setting, after software engineering, deep learning, and automation. Together with the vision project, it is what the B.Sc. exit can point to besides coursework.

---

## Semester 7

### Reinforcement and Imitation Learning

A controller from Semester 4 follows a designed law. This course learns a policy from a reward and a second policy from recorded demonstrations. Perception to Action and the autonomy project use that policy. It comes after deep learning, control, and dynamics, which a policy needs.

### Robot Software

The policy and the navigator have to live in robot software, with a flight stack when the machine is an aircraft, in simulation. Linux and Real-Time Systems are the preparation. The course does not claim a machine was built or flown.

### Guidance and Navigation

Sensor fusion estimates a state. This course plans a path and builds a map, in simulation, and the swarm course uses that planner. The autonomy project’s checkable result, a map or a route that changes when a zone is closed, comes from here.

### Multi-Robot and Swarm Systems

One vehicle is not the only system a learner will meet. This course is more than one machine, using the planner from Guidance and Navigation in the same semester, so the swarm work follows the single-vehicle planner as the weeks proceed. Without it, the degree stops at one robot.

### Efficient AI Software

A model that runs in a notebook is not a model that meets a latency limit. This course makes a smaller model under a size and latency budget, in software. It does not claim a flight computer or a physical robot. Real-Time Systems is the timing course it builds on.

### Autonomy Project I

The mission is two semesters so Semester 7 can set up the twin and the task while the policy, the navigator, and the software are being taught. Semester 8 then uses them. A one-semester project would have to finish before those courses do.

---

## Semester 8

### Reliable and Safe Learning

A policy can score well and still be unsafe to trust. This course is that limit, after reinforcement learning and before the mission is presented. Ethics and Technical Communication in Semester 1 comes first. This course comes after the policy has been learned.

### Perception to Action

Separate courses perceive, decide, and act. This course closes that loop: a camera image and a short task become a command, scored in the simulator. It sits after vision, 3D data, and the policy course. The autonomy project’s command comes from here.

### Autonomy Project II

This finishes the mission started in Semester 7. It uses the synthetic set, the policy, and the command, and it is presented live. The checkable result is a detection list, a map, or a route that changes when a zone is closed. The write-up states what would still have to be checked on a real machine. The project does not design a wing, a structure, or an engine.

### Technology and Society

Ethics and Technical Communication is the first-semester course. This course closes the degree, after the learner has built a machine in simulation. It is one course, not a second humanities sequence.

### Professional Portfolio

The degree’s evidence is the set of projects: machine learning, computer vision, applied intelligence, and the autonomy mission. This course puts that set in a form a hiring manager can open. Without it, the projects exist as coursework and not as a single record.

---

## What is deliberately not a course

A laboratory is not a course, and it is not mandatory. The [Aeromodelling Lab](http://www.ae.iitkgp.ac.in/aeroweb/footerlinks/aero_model.php) and the [Computer Lab](http://www.ae.iitkgp.ac.in/aeroweb/footerlinks/comp_lab.php) of the [Department of Aerospace Engineering, IIT Kharagpur](https://www.iitkgp.ac.in/department/AE) are not in the credit plan. An instructor may show a live model in the Aeromodelling Lab after Robot Mechanics, Dynamics of Autonomous Machines, or Simulation of Robotic Systems. A learner who does not attend still finishes.

Circuits, a workshop, a personal robot or drone, pilot hours, and an airframe design project are not courses. They are not required for the hiring roles this degree states.
