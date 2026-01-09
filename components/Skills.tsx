
import React from 'react';
import { SKILLS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02] scroll-mt-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-8">Technical <span className="text-gradient">Proficiency</span></h2>
          <div className="space-y-6">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-blue-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full flutter-gradient transition-all duration-1000" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="h-80 glass-card rounded-2xl p-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SKILLS}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis dataKey="name" stroke="#999" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              />
              <Bar dataKey="level" radius={[6, 6, 0, 0]} barSize={40}>
                {SKILLS.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#027DFD' : '#00D2FF'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Skills;
