import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class NormDistribution(DistributionTemplate):
    def __init__(self):
        super(NormDistribution, self).__init__('Нормальное распределение')

    def calculate(self, data: pd.Series) -> None:
        self.distribution = np.linspace(stats.norm.ppf(0.01) * data.min(), stats.norm.ppf(0.99) * data.max(), len(data))
        self.__mse__(data)