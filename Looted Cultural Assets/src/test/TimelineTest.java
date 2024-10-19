package test;

import org.junit.jupiter.api.Test;
import java.lang.reflect.Method;
import static org.junit.jupiter.api.Assertions.*;

public class TimelineTest {

    @Test
    void testGettersAndSetters() throws Exception {
        // Create an instance of the Timeline class using reflection
        Class<?> timelineClass = Class.forName("Timeline");
        Object timeline = timelineClass.getConstructor(String.class, String.class).newInstance("2020-01-01", "2020-12-31");

        // Test getter methods using reflection
        Method getStartDate = timelineClass.getMethod("getStartDate");
        Method getEndDate = timelineClass.getMethod("getEndDate");
        assertEquals("2020-01-01", getStartDate.invoke(timeline));
        assertEquals("2020-12-31", getEndDate.invoke(timeline));

        // Test setter methods using reflection
        Method setStartDate = timelineClass.getMethod("setStartDate", String.class);
        Method setEndDate = timelineClass.getMethod("setEndDate", String.class);
        setStartDate.invoke(timeline, "2021-01-01");
        setEndDate.invoke(timeline, "2021-12-31");
        assertEquals("2021-01-01", getStartDate.invoke(timeline));
        assertEquals("2021-12-31", getEndDate.invoke(timeline));
    }

    @Test
    void testToString() throws Exception {
        // Create an instance of the Timeline class using reflection
        Class<?> timelineClass = Class.forName("Timeline");
        Object timeline = timelineClass.getConstructor(String.class, String.class).newInstance("2020-01-01", "2020-12-31");

        // Test toString method using reflection
        Method toStringMethod = timelineClass.getMethod("toString");
        String expected = "Timeline [startDate=2020-01-01, endDate=2020-12-31]";
        assertEquals(expected, toStringMethod.invoke(timeline));
    }
}
