package ay.elmehdi.todoapp;

import ay.elmehdi.todoapp.model.Todo;
import ay.elmehdi.todoapp.repository.TodoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(TodoRepository repository) {

        return args -> {
            log.info("Preloading " + repository.save(new Todo("ETQDev, je veux initialiser le projet à l'aide de create-react-app","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta .", false, false)));
            log.info("Preloading " + repository.save(new Todo("ETQDev, je veux initialiser le projet à l'aide de create-react-app","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta .", false, false)));
        };
    }
}