//Interface
import { RadarInterface } from "@/interfaces/RadarChart";

export const generalSkills: RadarInterface = {
    labels: ['Communication Skills', 'Project Management', 'Time Management', 'Problem Solving', 'Client Management', 'Team Collaboration'],
    datasets: [
      {
        label: 'Essential Skills',
        data: [9, 8, 10, 9, 8, 10],
        backgroundColor: 'rgba(0, 179, 230, 0.2)',
        borderColor: '#00b3e6',
        borderWidth: 1,
      },
    ],
};