package ay.elmehdi.todoapp.repository;

import ay.elmehdi.todoapp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {


}
