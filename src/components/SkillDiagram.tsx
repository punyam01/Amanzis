import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Skill {
  name: string;
  value: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', value: 90, category: 'Frontend' },
  { name: 'TypeScript', value: 85, category: 'Frontend' },
  { name: 'Node.js', value: 80, category: 'Backend' },
  { name: 'Express', value: 75, category: 'Backend' },
  { name: 'D3.js', value: 70, category: 'Data' },
  { name: 'Tailwind', value: 95, category: 'Design' },
  { name: 'Framer Motion', value: 85, category: 'Design' },
  { name: 'PostgreSQL', value: 65, category: 'Backend' },
];

export const SkillDiagram: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 600;
    const height = 400;
    const svg = d3.select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    svg.selectAll('*').remove();

    const simulation = d3.forceSimulation(skills as any)
      .force('charge', d3.forceManyBody().strength(50))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius((d: any) => d.value / 2 + 10));

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const nodes = svg.append('g')
      .selectAll('circle')
      .data(skills)
      .enter()
      .append('g')
      .attr('class', 'node-group');

    nodes.append('circle')
      .attr('r', (d) => d.value / 2)
      .attr('fill', (d) => colorScale(d.category))
      .attr('opacity', 0.8)
      .attr('stroke', '#fff')
      .attr('stroke-width', 1)
      .style('filter', 'drop-shadow(0 0 8px rgba(0, 242, 255, 0.5))');

    nodes.append('text')
      .text((d) => d.name)
      .attr('text-anchor', 'middle')
      .attr('dy', '.3em')
      .attr('fill', '#fff')
      .style('font-size', '11px')
      .style('font-weight', '800')
      .style('text-shadow', '0 0 10px rgba(0,0,0,0.8)')
      .style('pointer-events', 'none');

    simulation.on('tick', () => {
      nodes.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
      <svg ref={svgRef} className="w-full max-w-2xl h-auto" />
    </div>
  );
};
