from rest_framework import viewsets
from rest_framework.response import Response

from API.models import Institute, Department, Order, Batch, BatchRow, PillsToBeAdded, OrderBatch, Roll, \
    Bag, MissingPictures, Error, Check
from API.serializers import InstituteSerializer, DepartmentSerializer, OrderSerializer, BatchSerializer, \
    BatchRowSerializer, PillsToBeAddedSerializer, OrderBatchSerializer, RollSerializer, \
    BagSerializer, MissingPicturesSerializer, ErrorSerializer, CheckSerializer


class InstituteViewSet(viewsets.ModelViewSet):
    queryset = Institute.objects.all()
    serializer_class = InstituteSerializer


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    filterset_fields = ('order_released',)


class OrderVrijgifteViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data={'order_released': True}, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)


class BatchViewSet(viewsets.ModelViewSet):
    queryset = Batch.objects.all()
    serializer_class = BatchSerializer
    filterset_fields = ('orderbatch__order_NR',)


class BatchRowViewSet(viewsets.ModelViewSet):
    queryset = BatchRow.objects.all()
    serializer_class = BatchRowSerializer
    filterset_fields = ('batch_NR',)


class PillsToBeAddedViewSet(viewsets.ModelViewSet):
    queryset = PillsToBeAdded.objects.all()
    serializer_class = PillsToBeAddedSerializer
    filterset_fields = ('bag_NR',)


class OrderBatchViewSet(viewsets.ModelViewSet):
    queryset = OrderBatch.objects.all()
    serializer_class = OrderBatchSerializer

class RollViewSet(viewsets.ModelViewSet):
    queryset = Roll.objects.all()
    serializer_class = RollSerializer
    filterset_fields = ('batch_NR',)


class BagViewSet(viewsets.ModelViewSet):
    queryset = Bag.objects.all()
    serializer_class = BagSerializer
    filterset_fields = ('roll_NR',)


class MissingPicturesViewSet(viewsets.ModelViewSet):
    queryset = MissingPictures.objects.all()
    serializer_class = MissingPicturesSerializer
    filterset_fields = ('bag_NR',)


class ErrorViewSet(viewsets.ModelViewSet):
    queryset = Error.objects.all()
    serializer_class = ErrorSerializer
    filterset_fields = ('bag_NR',)

class ChecksViewSet(viewsets.ModelViewSet):
    queryset = Check.objects.all()
    serializer_class = CheckSerializer
    filterset_fields = ('order_NR', 'batch_NR', 'roll_NR', 'bag_NR',)
