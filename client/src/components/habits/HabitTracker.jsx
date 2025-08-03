import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../services/api';
import HabitList from './HabitList';
import HabitForm from './HabitForm';

const fetchHabits = async () => {
  const { data } = await api.get('/habits');
  return data.data;
};

const addHabit = async (habitName) => {
  const { data } = await api.post('/habits', { name: habitName });
  return data.data;
};

const HabitTracker = () => {
  const queryClient = useQueryClient();

  const { data: habits, isLoading, isError } = useQuery({
    queryKey: ['habits'],
    queryFn: fetchHabits,
  });

  const mutation = useMutation({
    mutationFn: addHabit,
    onSuccess: () => {
      // Invalidate and refetch the habits query to show the new habit
      queryClient.invalidateQueries({ queryKey: ['habits'] });
    },
  });

  const handleAddHabit = (name) => {
    mutation.mutate(name);
  };

  if (isLoading) return <div>Loading habits...</div>;
  if (isError) return <div>Error fetching habits.</div>;

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Habit Tracker</h1>
      <div className="p-6 mb-6 bg-white rounded-lg shadow">
        <HabitForm onAddHabit={handleAddHabit} />
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <HabitList habits={habits} />
      </div>
    </div>
  );
};

export default HabitTracker;