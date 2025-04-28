import { Component, OnInit } from '@angular/core';
import { Task } from '../enums/Task';
import { TaskService } from 'src/app/services/Task/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = {
    title: '',
    description: '',
    status: 'PENDING',
    dueDateTime: ''
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  createTask(): void {
    if (!this.newTask.title || !this.newTask.dueDateTime) {
      alert('Title and Due Date are required!');
      return;
    }
  
  
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.newTask = { title: '', description: '', status: 'PENDING', dueDateTime: '' };
      this.getTasks();
    }, error => {
      alert('Error creating task. Please try again!');
    });
  }
  

  updateTaskStatus(task: Task, newStatus: string): void {
    this.taskService.updateTaskStatus(task.id!, newStatus).subscribe(() => {
      this.getTasks();
    });
  }

  deleteTask(id: number | undefined): void {
    if (id !== undefined && confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.getTasks();
      });
    }
  }
}
