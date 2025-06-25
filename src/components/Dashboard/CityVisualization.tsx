import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as THREE from 'three';

// 건물 컴포넌트
const Building: React.FC<{ 
  position: [number, number, number]; 
  height: number; 
  color: string;
  energyLevel: number;
}> = ({ position, height, color, energyLevel }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      // 에너지 레벨에 따른 건물 색상 변화
      const intensity = 0.5 + energyLevel * 0.5;
      meshRef.current.material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color).multiplyScalar(intensity),
        emissive: new THREE.Color(color).multiplyScalar(energyLevel * 0.3),
      });
    }
  });

  return (
    <Box
      ref={meshRef}
      position={position}
      args={[1, height, 1]}
      castShadow
      receiveShadow
    />
  );
};

// 에너지 생산 시설 컴포넌트
const EnergySource: React.FC<{
  position: [number, number, number];
  type: 'solar' | 'wind' | 'coal';
  output: number;
}> = ({ position, type, output }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const getColor = () => {
    switch (type) {
      case 'solar': return '#FFD700';
      case 'wind': return '#87CEEB';
      case 'coal': return '#696969';
      default: return '#FFFFFF';
    }
  };

  useFrame(() => {
    if (meshRef.current && type === 'wind') {
      meshRef.current.rotation.y += 0.02 * output; // 바람 터빈 회전
    }
  });

  return (
    <Sphere
      ref={meshRef}
      position={position}
      args={[0.5]}
      material={new THREE.MeshStandardMaterial({ 
        color: getColor(),
        emissive: new THREE.Color(getColor()).multiplyScalar(output * 0.2),
      })}
    />
  );
};

// 메인 도시 시각화 컴포넌트
const CityVisualization: React.FC = () => {
  const simulation = useSelector((state: RootState) => state.simulation);
  const environment = useSelector((state: RootState) => state.environment);

  // 가상 도시 데이터 생성
  const generateCityData = () => {
    const buildings = [];
    const energySources = [];

    // 건물 생성 (5x5 그리드)
    for (let x = -10; x <= 10; x += 4) {
      for (let z = -10; z <= 10; z += 4) {
        if (Math.random() > 0.3) { // 70% 확률로 건물 생성
          const height = 2 + Math.random() * 6;
          const energyLevel = Math.random();
          let color = '#4A90E2'; // 기본 파란색
          
          // 지역 타입에 따른 색상
          if (x < 0 && z < 0) color = '#F5A623'; // 주거지역 - 주황색
          else if (x > 0 && z < 0) color = '#BD10E0'; // 상업지역 - 보라색
          else if (x > 0 && z > 0) color = '#B8E986'; // 산업지역 - 연두색
          
          buildings.push({
            position: [x, height / 2, z] as [number, number, number],
            height,
            color,
            energyLevel,
          });
        }
      }
    }

    // 에너지 생산 시설 생성
    energySources.push(
      { position: [-15, 1, 0] as [number, number, number], type: 'solar' as const, output: 0.8 },
      { position: [15, 1, 0] as [number, number, number], type: 'wind' as const, output: 0.6 },
      { position: [0, 1, 15] as [number, number, number], type: 'coal' as const, output: 0.9 }
    );

    return { buildings, energySources };
  };

  const cityData = generateCityData();

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [20, 15, 20], fov: 60 }}
        shadows
        className="w-full h-full"
      >
        {/* 조명 설정 */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* 시간에 따른 조명 변화 */}
        <pointLight
          position={[0, 10, 0]}
          intensity={environment.sunlight / 100}
          color="#FFE135"
        />

        {/* 카메라 컨트롤 */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2.5}
        />

        {/* 지면 */}
        <Box
          position={[0, -0.5, 0]}
          args={[40, 1, 40]}
          material={new THREE.MeshStandardMaterial({ color: '#2F4F4F' })}
          receiveShadow
        />

        {/* 건물들 렌더링 */}
        {cityData.buildings.map((building, index) => (
          <Building
            key={index}
            position={building.position}
            height={building.height}
            color={building.color}
            energyLevel={building.energyLevel}
          />
        ))}

        {/* 에너지 생산 시설들 렌더링 */}
        {cityData.energySources.map((source, index) => (
          <EnergySource
            key={index}
            position={source.position}
            type={source.type}
            output={source.output}
          />
        ))}
      </Canvas>

      {/* 오버레이 정보 */}
      <div className="absolute top-4 left-4 bg-dark-800 bg-opacity-90 rounded-lg p-3">
        <div className="text-sm text-gray-300 space-y-1">
          <div>🏠 주거지역 (주황색)</div>
          <div>🏢 상업지역 (보라색)</div>
          <div>🏭 산업지역 (연두색)</div>
          <div>🏛️ 공공시설 (파란색)</div>
        </div>
      </div>

      {/* 시뮬레이션 정보 */}
      <div className="absolute bottom-4 right-4 bg-dark-800 bg-opacity-90 rounded-lg p-3">
        <div className="text-sm text-gray-300 space-y-1">
          <div>🌡️ 온도: {environment.temperature}°C</div>
          <div>☀️ 일조량: {environment.sunlight}%</div>
          <div>💨 풍속: {environment.windSpeed}m/s</div>
        </div>
      </div>
    </div>
  );
};

export default CityVisualization; 