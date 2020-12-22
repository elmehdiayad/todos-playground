package ay.elmehdi.todoapp.service;

import ay.elmehdi.todoapp.model.Todo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {

    private List<Todo> todos;



    public void createTodoList() {
        if(todos == null) {
            todos = new ArrayList<>();
        }
    }

    public boolean isJSONValid(String jsonInString) {
        try {
            return new ObjectMapper().readTree(jsonInString) != null;
        } catch (IOException e) {
            return false;
        }
    }
}
