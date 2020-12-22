package ay.elmehdi.todoapp.controller;


import ay.elmehdi.todoapp.model.Todo;
import ay.elmehdi.todoapp.repository.TodoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
public class TodoController {

    private final TodoRepository repository;


    TodoController(TodoRepository repository){
        this.repository = repository;
    }

    @GetMapping("/todos")
    List<Todo> all() {
        return repository.findAll();
    }

    @PostMapping("/todos")
    Todo newTodo(@RequestBody Todo newEmployee) {
        return repository.save(newEmployee);
    }

    // Single item

    @GetMapping("/todos/{id}")
    Todo one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id));
    }

    @PutMapping("/todos/complete/{id}")
    Optional<Todo> completeTodo(@PathVariable Long id) {
        return repository.findById(id)
                .map(todo -> {
                    todo.setCompleted(true);
                    return repository.save(todo);
                });

    }

    @PutMapping("/todos/archive/{id}")
    Optional<Todo> archiveTodo(@PathVariable Long id) {
        return repository.findById(id)
                .map(todo -> {
                    todo.setDeleted(true);
                    return repository.save(todo);
                });

    }

    @DeleteMapping("/todos/{id}")
    void deleteTodo(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
