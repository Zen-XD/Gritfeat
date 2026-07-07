const data = [
    {
        departmentId: "D1",
        departmentName: "Engineering",
        manager: "Alice",
        employees: [
            {
                employeeId: "E1",
                name: "John",
                salary: 90000,
                projects: [
                    {
                        projectId: "P1",
                        name: "Platform Revamp",
                        hours: 120,
                        status: "completed",
                    },
                    {
                        projectId: "P2",
                        name: "API Optimization",
                        hours: 80,
                        status: "in-progress",
                    },
                ],
            },
            {
                employeeId: "E2",
                name: "Emma",
                salary: 95000,
                projects: [
                    {
                        projectId: "P3",
                        name: "Mobile App",
                        hours: 150,
                        status: "completed",
                    },
                    {
                        projectId: "P4",
                        name: "DevOps Setup",
                        hours: 60,
                        status: "completed",
                    },
                ],
            },
        ],
    },
    {
        departmentId: "D2",
        departmentName: "Marketing",
        manager: "Bob",
        employees: [
            {
                employeeId: "E3",
                name: "Sophia",
                salary: 70000,
                projects: [
                    {
                        projectId: "P5",
                        name: "SEO Campaign",
                        hours: 100,
                        status: "completed",
                    },
                    {
                        projectId: "P6",
                        name: "Ad Strategy",
                        hours: 50,
                        status: "in-progress",
                    },
                ],
            },
            {
                employeeId: "E4",
                name: "Liam",
                salary: 65000,
                projects: [
                    {
                        projectId: "P7",
                        name: "Brand Awareness",
                        hours: 90,
                        status: "completed",
                    },
                ],
            },
        ],
    },
];

// Find the total number of employees in the company.
Q1 = () => {
    const totalEmployees = data.reduce((total, dept) => {
        return total + dept.employees.length;
    }, 0);

    console.log(totalEmployees);
};
// Q1();

// Get an array of all employee names.
Q2 = () => {
    const employeeNames = data.flatMap((dept) =>
        dept.employees.map((emp) => emp.name),
    );
    console.log(employeeNames);
};
// Q2();

// Calculate total salary per department.
Q3 = () => {
    const salaryPerDepartment = data.map((dept) => ({
        department: dept.departmentName,
        totalSalary: dept.employees.reduce((sum, emp) => {
            return sum + emp.salary;
        }, 0),
    }));

    console.log(salaryPerDepartment);
};
// Q3();

// Find the employee who has worked the most total hours.
Q4 = () => {
    const employees = data.flatMap((dept) => {
        return dept.employees;
    });

    const hardestWorker = employees.reduce((maxEmployee, employee) => {
        const maxHours = maxEmployee.projects.reduce((sum, project) => {
            return sum + project.hours;
        }, 0); //returns 200 because first entry from reduce

        const totalHours = employee.projects.reduce((sum, project) => {
            return sum + project.hours;
        }, 0); // rest of the entries from reduce

        // console.log(totalHours);
        // console.log(maxHours);

        if (totalHours > maxHours) {
            return employee;
        } else {
            return maxEmployee;
        }
    });

    // console.log(hardestWorker)

    console.log(
        hardestWorker.name,
        ":",
        hardestWorker.projects.reduce((sum, project) => {
            return sum + project.hours;
        }, 0),
        "hrs",
    );
};
// Q4();

// Get department-wise total project hours.
Q5 = () => {
    const projectHrsPerDepartment = data.map((dept) => ({
        department: dept.departmentName,
        totalSalary: dept.employees.reduce((sum, emp) => {
            return (
                sum +
                emp.projects.reduce((sumHrs, project) => {
                    return sumHrs + project.hours;
                }, 0)
            );
        }, 0),
    }));

    console.log(projectHrsPerDepartment);
};
// Q5();

// Create a flattened list of all projects with department and employee name attached.
// Eg reference: [
//   {
//     department: "Engineering",
//     employee: "John",
//     projectName: "Platform Revamp",
//     hours: 120
//   }
// ]
Q6 = () => {
    const allProjects = data.flatMap((dept) => {
        return dept.employees.flatMap((emp) => {
            return emp.projects.map((project) => ({
                department: dept.departmentName,
                employee: emp.name,
                projectName: project.name,
                hours: project.hours,
            }));
        });
    });

    console.log(allProjects);
};
// Q6();

// Find the department with the highest total salary expense.
Q7 = () => {
    const departmentSalary = data.reduce(
        (max, dept) => {
            const totalSalary = dept.employees.reduce(
                (sum, sal) => sum + sal.salary,
                0,
            );

            return totalSalary > max.totalSalary
                ? {
                      departmentName: dept.departmentName,
                      totalSalary,
                  }
                : max;
        },
        { departmentName: "", totalSalary: 0 },
    );

    console.log(departmentSalary);
};
// Q7();

// Create a summary object like:
// {
//   Engineering: {
//     totalEmployees: 2,
//     totalSalary: 185000,
//     totalHours: 410
//   },
//   Marketing: {
//     totalEmployees: 2,
//     totalSalary: 135000,
//     totalHours: 240
//   }
// }
Q8 = () => {
    const summary = data.reduce((summ, dept) => {
        const totalEmployees = dept.employees.length;

        const totalSalary = dept.employees.reduce(
            (sum, sal) => sum + sal.salary,
            0,
        );

        const totalHours = dept.employees.reduce((sum, emp) => {
            return (
                sum +
                emp.projects.reduce((sumHrs, project) => {
                    return sumHrs + project.hours;
                }, 0)
            );
        }, 0);

        summ[dept.departmentName] = {
            totalEmployees,
            totalSalary,
            totalHours,
        };

        return summ;
    }, {});

    // const s2 = data.Map((dept) => ({
    //     [dept.departmentName]: dept.employees.reduce(
    //         (max, totals) => {
    //             const totalEmployees = dept.employees.length;

    //             const totalSalary = dept.employees.reduce(
    //                 (sum, sal) => sum + sal.salary,
    //                 0,
    //             );

    //             const totalHours = dept.employees.reduce((sum, emp) => {
    //                 return (
    //                     sum +
    //                     emp.projects.reduce((sumHrs, project) => {
    //                         return sumHrs + project.hours;
    //                     }, 0)
    //                 );
    //             }, 0);

    //             return {
    //                 totalEmployees: totalEmployees,
    //                 totalSalary: totalSalary,
    //                 totalHours: totalHours,
    //             };
    //         },
    //         { totalEmployees: 0, totalSalary: 0, totalHours: 0 },
    //     ),
    // }));

    // console.log(s2);

    console.log(summary);
};
// Q8();

// Group all projects by status using reduce.
// {
//   completed: [],
//   "in-progress": []
// }
Q9 = () => {
    const groupByStatus = data
        .flatMap((department) => department.employees)
        .flatMap((employee) => employee.projects)
        .reduce((groups, project) => {
            if (!groups[project.status]) {
                groups[project.status] = [];
            }

            groups[project.status].push(project.name);

            return groups;
        }, {});

    console.log(groupByStatus);
};
Q9();

// Find the average salary of employees who have at least one completed project.
Q10 = () => {
    const completedEmployees = data
        .flatMap((department) => department.employees)
        .filter((employee) =>
            employee.projects.some((project) => project.status === "completed"),
        );

    const averageSalary =
        completedEmployees.reduce((sum, employee) => sum + employee.salary, 0) /
        completedEmployees.length;

    console.log(averageSalary);
};
// Q10();

// Find the employee who has the highest average project hours.
Q11 = () => {
    const highestAverage = data
        .flatMap((department) => department.employees)
        .reduce(
            (best, employee) => {
                const total = employee.projects.reduce(
                    (sum, project) => sum + project.hours,
                    0,
                );

                const average = total / employee.projects.length;

                return average > best.average ? { employee, average } : best;
            },
            { employee: null, average: 0 },
        );

    console.log(highestAverage);
};
// Q11();

// Find the most expensive department per project hour ratio(hint: total salary / total project hours).
Q12 = () => {
    const ratio = data
        .map((department) => {
            const salary = department.employees.reduce(
                (sum, employee) => sum + employee.salary,
                0,
            );

            const hours = department.employees.reduce((sum, employee) => {
                return (
                    sum +
                    employee.projects.reduce(
                        (pSum, project) => pSum + project.hours,
                        0,
                    )
                );
            }, 0);

            return {
                department: department.departmentName,
                ratio: salary / hours,
            };
        })
        .reduce((highest, current) =>
            current.ratio > highest.ratio ? current : highest,
        );

    console.log(ratio);
};
// Q12();

// Build a structure that groups employees into high and low by whether their total project hours exceed 150.
// {
//   high: [employeeData],
//   low: [employeeData]
// }
Q13 = () => {
    const groupedEmployees = data
        .flatMap((department) => department.employees)
        .reduce(
            (groups, employee) => {
                const totalHours = employee.projects.reduce(
                    (sum, project) => sum + project.hours,
                    0,
                );

                if (totalHours > 150) {
                    groups.high.push(employee);
                } else {
                    groups.low.push(employee);
                }

                return groups;
            },
            {
                high: [],
                low: [],
            },
        );

    console.log(groupedEmployees);
};
// Q13();
