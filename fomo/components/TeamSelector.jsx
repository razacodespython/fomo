import React, { useState } from 'react';

function TeamSelector() {
  const [showTeamInfo, setShowTeamInfo] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 rounded ${!showTeamInfo ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setShowTeamInfo(false)}
        >
          My Info
        </button>
        <button
          className={`px-4 py-2 rounded ${showTeamInfo ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setShowTeamInfo(true)}
        >
          My Team
        </button>
      </div>
      {showTeamInfo ? (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">My Team</h2>
          <p className="text-sm text-gray-700 mb-4">Select a team.</p>
          <div className="grid grid-cols-2 gap-4">
            <TeamCard color="red-500" team="Red" winner="95%" teamGain="5%" />
            <TeamCard color="blue-500" team="Blue" winner="80%" teamGain="20%" />
            <TeamCard color="yellow-500" team="Yellow" winner="65%" teamGain="35%" />
            <TeamCard color="green-500" team="Green" winner="50%" teamGain="50%" />
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold text-gray-900">My Info</h2>
          {/* Placeholder or additional content for "My Info" can be added here */}
        </div>
      )}
    </div>
  );
}

function TeamCard({ color, team, winner, teamGain }) {
  return (
    <div className={`p-4 rounded-lg shadow-md bg-white border-l-8 border-${color}`}>
      <h3 className={`font-semibold text-lg text-${color}`}>{team} Team</h3>
      <p className="text-gray-700">Winner gains {winner}</p>
      <p className="text-gray-700">Team gains {teamGain}</p>
    </div>
  );
}

export default TeamSelector;
